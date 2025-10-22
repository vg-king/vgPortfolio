"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "e9256352-3c5b-47bb-ac52-3efd8901a1c8",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-form-container" style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '2rem',
      background: 'rgba(147, 51, 234, 0.05)',
      borderRadius: '20px',
      border: '1px solid rgba(147, 51, 234, 0.2)',
      backdropFilter: 'blur(10px)'
    }}>
      <h3 className="contact-form-title" style={{
        fontSize: '1.8rem',
        fontWeight: '600',
        color: 'white',
        marginBottom: '1.5rem',
        textAlign: 'center',
        textShadow: '0 0 10px rgba(147, 51, 234, 0.5)'
      }}>
        Send Me a Message
      </h3>
      
      {submitStatus === 'success' && (
        <div style={{
          padding: '1rem',
          marginBottom: '1.5rem',
          background: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          borderRadius: '12px',
          color: '#22c55e',
          textAlign: 'center',
          fontSize: '0.9rem',
          fontWeight: '500'
        }}>
          ✅ Message sent successfully! I&apos;ll get back to you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div style={{
          padding: '1rem',
          marginBottom: '1.5rem',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '12px',
          color: '#ef4444',
          textAlign: 'center',
          fontSize: '0.9rem',
          fontWeight: '500'
        }}>
          ❌ Failed to send message. Please try again or use the email link above.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label htmlFor="name" style={{
            display: 'block',
            color: '#e5e7eb',
            fontSize: '0.9rem',
            fontWeight: '500',
            marginBottom: '0.5rem'
          }}>
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.875rem 1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(147, 51, 234, 0.3)',
              borderRadius: '12px',
              color: 'white',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s ease',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(147, 51, 234, 0.6)';
              e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(147, 51, 234, 0.3)';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" style={{
            display: 'block',
            color: '#e5e7eb',
            fontSize: '0.9rem',
            fontWeight: '500',
            marginBottom: '0.5rem'
          }}>
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.875rem 1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(147, 51, 234, 0.3)',
              borderRadius: '12px',
              color: 'white',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s ease',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(147, 51, 234, 0.6)';
              e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(147, 51, 234, 0.3)';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" style={{
            display: 'block',
            color: '#e5e7eb',
            fontSize: '0.9rem',
            fontWeight: '500',
            marginBottom: '0.5rem'
          }}>
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            style={{
              width: '100%',
              padding: '0.875rem 1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(147, 51, 234, 0.3)',
              borderRadius: '12px',
              color: 'white',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s ease',
              resize: 'vertical',
              minHeight: '120px',
              fontFamily: 'inherit',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(147, 51, 234, 0.6)';
              e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(147, 51, 234, 0.3)';
              e.target.style.boxShadow = 'none';
            }}
            placeholder="Tell me about your project, idea, or just say hello..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '1rem',
            background: isSubmitting 
              ? 'rgba(147, 51, 234, 0.3)' 
              : 'linear-gradient(135deg, #9333ea, #7c3aed)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(147, 51, 234, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        >
          {isSubmitting ? (
            <>
              <div style={{
                width: '16px',
                height: '16px',
                border: '2px solid transparent',
                borderTop: '2px solid white',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
              Sending...
            </>
          ) : (
            <>
              <span>📧</span>
              Send Message
            </>
          )}
        </button>
      </form>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}