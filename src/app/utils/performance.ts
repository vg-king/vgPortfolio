"use client";

// Extended performance interfaces
interface FirstInputEntry extends PerformanceEntry {
  processingStart?: number;
  startTime: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput?: boolean;
  value?: number;
}

// Performance monitoring utility
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private observers: PerformanceObserver[] = [];

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Monitor Core Web Vitals
  initCoreWebVitals() {
    if (typeof window === 'undefined') return;

    // Largest Contentful Paint
    this.observeMetric('largest-contentful-paint', (entries) => {
      const lcp = entries[entries.length - 1];
      console.log('LCP:', lcp.startTime);
    });

    // First Input Delay
    this.observeMetric('first-input', (entries) => {
      const fid = entries[0] as FirstInputEntry;
      if (fid && fid.processingStart) {
        console.log('FID:', fid.processingStart - fid.startTime);
      }
    });

    // Cumulative Layout Shift
    this.observeMetric('layout-shift', (entries) => {
      const cls = entries.reduce((sum, entry) => {
        const layoutEntry = entry as LayoutShiftEntry;
        if (!layoutEntry.hadRecentInput) {
          return sum + (layoutEntry.value || 0);
        }
        return sum;
      }, 0);
      console.log('CLS:', cls);
    });
  }

  // Monitor navigation performance
  measurePageLoad() {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      const metrics = {
        'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
        'TCP Connection': navigation.connectEnd - navigation.connectStart,
        'TLS Setup': navigation.requestStart - navigation.secureConnectionStart,
        'Request': navigation.responseStart - navigation.requestStart,
        'Response': navigation.responseEnd - navigation.responseStart,
        'DOM Processing': navigation.domContentLoadedEventStart - navigation.responseEnd,
        'Resource Loading': navigation.loadEventStart - navigation.domContentLoadedEventEnd,
        'Total Load Time': navigation.loadEventEnd - navigation.fetchStart
      };

      console.table(metrics);
    });
  }

  // Monitor memory usage
  monitorMemoryUsage() {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const memory = (performance as { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
    if (!memory) return;
    
    const memoryInfo = {
      'Used JS Heap Size': `${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`,
      'Total JS Heap Size': `${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`,
      'Heap Size Limit': `${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`
    };

    console.log('Memory Usage:', memoryInfo);
  }

  private observeMetric(type: string, callback: (entries: PerformanceEntry[]) => void) {
    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });
      observer.observe({ entryTypes: [type] });
      this.observers.push(observer);
    } catch (error) {
      console.warn(`Could not observe ${type}:`, error);
    }
  }

  // Cleanup observers
  cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Hook for React components
export function usePerformanceMonitoring() {
  if (typeof window !== 'undefined') {
    const monitor = PerformanceMonitor.getInstance();
    monitor.initCoreWebVitals();
    monitor.measurePageLoad();
    
    // Monitor memory every 30 seconds
    const memoryInterval = setInterval(() => {
      monitor.monitorMemoryUsage();
    }, 30000);

    return () => {
      clearInterval(memoryInterval);
      monitor.cleanup();
    };
  }
}