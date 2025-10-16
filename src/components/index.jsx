import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Mail, ShieldCheck, Smartphone, Settings, HelpingHand } from 'lucide-react';
import Reveal from './reveal';
import ClickCareFooter from './ClickCareFooter';
import emailjs from '@emailjs/browser';

const ClickCareHero = () => {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    emailjs.init('4Gd6anwA9I4OhPkDU'); // ✅ your public key
  }, []);

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    service_type: '',
    booking_date: '',
    message: '',
  });

  const openModal = (serviceName) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };

  const problems = [
    {
      number: '01',
      title: 'Struggling to use your smartphone?',
      desc: 'Learn step-by-step how to navigate apps, settings, and features with personalized guidance.',
      img: '/assets/01.png',
      imgAlt: 'Smartphone Help',
    },
    {
      number: '02',
      title: "Can't connect with family online?",
      desc: 'Discover how to use Messenger, Zoom, and other tools for meaningful video calls.',
      img: '/assets/02.png',
      imgAlt: 'Connect Online',
    },
    {
      number: '03',
      title: 'Worried about online scams?',
      desc: 'Get expert tips to protect yourself, secure accounts, and browse safely online.',
      img: '/assets/03.png',
      imgAlt: 'Online Safety',
    },
    {
      number: '04',
      title: 'Difficulty making online payments?',
      desc: 'Get hands-on help with secure online transactions and payment apps.',
      img: '/assets/04.png',
      imgAlt: 'Online Payments',
    },
    {
      number: '05',
      title: 'Trouble updating apps?',
      desc: 'Learn how to keep your apps up-to-date and running smoothly with confidence.',
      img: '/src/assets/react.svg',
      imgAlt: 'App Updates',
    },
    {
      number: '06',
      title: 'Confused by privacy settings?',
      desc: 'Understand and manage privacy settings to keep your personal data completely safe.',
      img: '/assets/clickcare_logo.png',
      imgAlt: 'Privacy Settings',
    },
  ];

  // FAQAccordion component (top-level, before everything)
  function FAQAccordion({ faq, idx }) {
    const [open, setOpen] = useState(false);
    return (
      <div className="w-full">
        <button
          className={`w-full flex items-center justify-between px-8 py-6 rounded-2xl bg-white shadow-md text-left transition-all duration-200 ${open ? 'border-b-0' : ''}`}
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '1.15rem', color: '#146C94', boxShadow: open ? '0 4px 24px rgba(175,211,226,0.15)' : '0 2px 8px rgba(175,211,226,0.08)' }}
          onClick={() => setIsModalOpen(true)}
          aria-expanded={open}
        >
          <span>{faq.question}</span>
          <span className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#AFD3E2] text-[#146C94] text-xl font-bold transition-transform duration-200" style={{ minWidth: '2rem', minHeight: '2rem', fontSize: '1.5rem', transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>
            {open ? '×' : '+'}
          </span>
        </button>
        {open && (
          <div className="px-8 py-6 rounded-b-2xl bg-[#146C94] text-white text-base mt-[-4px]" style={{ fontFamily: 'Montserrat, sans-serif', boxShadow: '0 2px 12px rgba(175,211,226,0.10)' }}>
            {faq.answer}
          </div>
        )}
      </div>
    );
  }
  // FAQ data for accordion
  const faqs = [
    {
      question: 'Who can benefit from ClickCare?',
      answer: 'ClickCare is designed for seniors, beginners, and anyone who feels overwhelmed by technology. We offer patient, step-by-step help for all ages.'
    },
    {
      question: 'What topics do you cover?',
      answer: 'We help with smartphones, apps, online safety, payments, privacy settings, and more. If you have a tech question, we can guide you!'
    },
    {
      question: 'How do I book a session?',
      answer: 'Simply click any "Book a Session" button on our site, or contact us at 0956 401 6766. We\'ll help you get started right away!'
    },
    {
      question: 'Is there a free consultation?',
      answer: 'Yes! Your first session is complimentary so you can experience our service risk-free.'
    },
  ];

  const ProblemCard = ({ problem }) => {
    return (
      <div
        className="rounded-2xl shadow-xl px-8 py-10 relative cursor-pointer overflow-hidden flex flex-col justify-between min-h-[260px] max-w-xs transition-all duration-300 hover:scale-105"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          backgroundColor: 'rgba(175, 211, 226, 0.3)', // #AFD3E2 with transparency
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(175, 211, 226, 0.5)'
        }}
      >
        {/* Top row: number badge */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="inline-flex items-center justify-center w-9 h-9 rounded-full font-bold text-base shadow"
            style={{
              backgroundColor: '#19A7CE',
              color: '#F6F1F1'
            }}
          >
            {problem.number}
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-bold mb-2 drop-shadow-sm"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#146C94'
          }}
        >
          {problem.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-6 drop-shadow-sm"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#146C94'
          }}
        >
          {problem.desc}
        </p>

        {/* Book a Session Button */}
        <button
          className="font-bold px-6 py-3 text-sm rounded-full transition-all duration-200 w-full mt-auto shadow-lg"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            backgroundColor: '#19A7CE',
            color: '#F6F1F1',
            border: '1px solid rgba(175, 211, 226, 0.5)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#AFD3E2';
            e.target.style.color = '#146C94';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#19A7CE';
            e.target.style.color = '#F6F1F1';
          }}
          onClick={() => setIsModalOpen(true)}
        >
          Book a Session
        </button>
      </div>
    );
  };

  return (
    <>
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>

      <div className="min-h-screen w-full relative overflow-hidden -mb-20 z-10" style={{
        borderBottomLeftRadius: '80px',
        borderBottomRightRadius: '80px',
        background: 'linear-gradient(135deg, #F6F1F1 0%, #AFD3E2 50%, #19A7CE 100%)'
      }}>
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div
            className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"
            style={{
              background: 'linear-gradient(45deg, #AFD3E2, #19A7CE)',
              top: '10%',
              left: '10%'
            }}
          ></div>
          <div
            className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"
            style={{
              background: 'linear-gradient(45deg, #19A7CE, #146C94)',
              top: '50%',
              right: '10%'
            }}
          ></div>
          <div
            className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"
            style={{
              background: 'linear-gradient(45deg, #F6F1F1, #AFD3E2)',
              bottom: '10%',
              left: '30%'
            }}
          ></div>
          <div
            className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"
            style={{
              background: 'linear-gradient(45deg, #AFD3E2, #F6F1F1)',
              top: '20%',
              right: '30%'
            }}
          ></div>
          <div
            className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"
            style={{
              background: 'linear-gradient(45deg, #19A7CE, #AFD3E2)',
              bottom: '30%',
              right: '20%'
            }}
          ></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 px-20 py-5 lg:pl-8">
          <div className="max-w-15xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="/assets/clickcare_logo.png"
                alt="ClickCare Logo"
                className="w-10 h-10 rounded-full shadow-lg object-cover"
              />
              <span className="text-2xl drop-shadow-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#146C94' }}>
                <span className="font-normal">Click</span>
                <span className="font-bold">Care</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <a href="#problems" className="font-bold text-base drop-shadow-sm transition-colors duration-200" style={{ color: '#146C94' }}
                onMouseEnter={(e) => e.target.style.color = '#19A7CE'}
                onMouseLeave={(e) => e.target.style.color = '#146C94'}>Challenges We Solve</a>
              <a href="#services" className="font-bold text-base drop-shadow-sm transition-colors duration-200" style={{ color: '#146C94' }}
                onMouseEnter={(e) => e.target.style.color = '#19A7CE'}
                onMouseLeave={(e) => e.target.style.color = '#146C94'}>Our Services</a>
              <a href="#faqs" className="font-bold text-base drop-shadow-sm transition-colors duration-200" style={{ color: '#146C94' }}
                onMouseEnter={(e) => e.target.style.color = '#19A7CE'}
                onMouseLeave={(e) => e.target.style.color = '#146C94'}>FAQs</a>
              <a href="#review" className="font-bold text-base drop-shadow-sm transition-colors duration-200" style={{ color: '#146C94' }}
                onMouseEnter={(e) => e.target.style.color = '#19A7CE'}
                onMouseLeave={(e) => e.target.style.color = '#146C94'}>Reviews</a>
            </div>

            {/* Phone Number */}
            <div className="hidden md:block">
              <div
                className="rounded-full px-6 py-4 transition-all duration-200 cursor-pointer group shadow-xl"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: 'rgba(175, 211, 226, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(175, 211, 226, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F6F1F1';
                  e.target.style.borderColor = '#AFD3E2';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(175, 211, 226, 0.3)';
                  e.target.style.borderColor = 'rgba(175, 211, 226, 0.5)';
                }}
              >
                <span className="font-bold text-sm drop-shadow-sm" style={{ color: '#146C94' }}>0956 401 6766</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="md:hidden p-2 rounded-lg shadow-lg"
              style={{
                backgroundColor: 'rgba(175, 211, 226, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(175, 211, 226, 0.5)'
              }}
            >
              {isMenuOpen ? <X size={20} style={{ color: '#146C94' }} /> : <Menu size={20} style={{ color: '#146C94' }} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className="md:hidden absolute top-full left-0 right-0 mt-2 mx-6 rounded-xl shadow-2xl"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: 'rgba(175, 211, 226, 0.2)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(175, 211, 226, 0.3)'
              }}
            >
              <div className="p-6 space-y-4">
                <a href="#problems" className="block font-medium text-sm drop-shadow-sm transition-colors duration-200"
                  style={{ color: '#146C94' }}
                  onMouseEnter={(e) => e.target.style.color = '#19A7CE'}
                  onMouseLeave={(e) => e.target.style.color = '#146C94'}>Challenges We Solve</a>
                <a href="#services" className="block font-medium text-sm drop-shadow-sm transition-colors duration-200"
                  style={{ color: '#146C94' }}
                  onMouseEnter={(e) => e.target.style.color = '#19A7CE'}
                  onMouseLeave={(e) => e.target.style.color = '#146C94'}>Our Services</a>
                <a href="#faqs" className="block font-medium text-sm drop-shadow-sm transition-colors duration-200"
                  style={{ color: '#146C94' }}
                  onMouseEnter={(e) => e.target.style.color = '#19A7CE'}
                  onMouseLeave={(e) => e.target.style.color = '#146C94'}>FAQs</a>
                <div className="pt-4" style={{ borderTop: '1px solid rgba(175, 211, 226, 0.3)' }}>
                  <span className="font-semibold text-sm drop-shadow-sm" style={{ color: '#146C94' }}>0956 401 6766</span>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="relative z-10 px-6 py-20 lg:pl-20">
          <Reveal>
            <div className="max-w-4xl text-left">
              {/* Hero Title */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-regular leading-tight mb-4">
                  <span className="block mb-2 drop-shadow-2xl" style={{ color: '#146C94', fontFamily: 'Unbounded, cursive' }}>Every Click</span>
                  <span className="block drop-shadow-2xl" style={{ color: '#19A7CE', fontFamily: 'Unbounded, cursive' }}>Deserves Care</span>
                </h1>
              </div>

              {/* Hero Description */}
              <p className="text-lg md:text-xl leading-relaxed max-w-2xl mb-12 drop-shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#146C94' }}>
                ClickCare empowers senior citizens to confidently use smartphones,
                apps, and online tools — keeping them connected, safe, and
                independent.
              </p>

              {/* CTA Section */}
              <div className="max-w-4xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {/* Email Input */}
                  <div className="flex-1">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 z-10" style={{ color: '#146C94' }} />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email to get started"
                        className="w-full pl-12 pr-6 py-4 text-base outline-none rounded-full shadow-xl"
                        style={{
                          backgroundColor: 'rgba(246, 241, 241, 0.8)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(175, 211, 226, 0.5)',
                          color: '#146C94'
                        }}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center gap-4">
                    <button
                      className="font-bold px-8 py-4 rounded-full text-base flex items-center gap-3 transition-all duration-300 shadow-xl animate-pulseGlow"
                      style={{
                        backgroundColor: '#F6F1F1',
                        color: '#146C94',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'linear-gradient(to right, #19A7CE, #AFD3E2)';
                        e.target.style.transform = 'translateY(-3px) scale(1.05)';
                        e.target.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#F6F1F1';
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                      }}
                      onClick={() => setIsModalOpen(true)}
                    >
                      BOOK A SESSION
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </main>
      </div>

      {/* Problems Section */}
      <section id='problems' className="min-h-screen relative overflow-hidden py-24 px-6 " style={{ backgroundColor: '#F6F1F1' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-regular mb-6 drop-shadow-lg mt-16" style={{ fontFamily: 'Unbounded, cursive', color: '#146C94' }}>
              Are You Running Into These Problems?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 drop-shadow-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#146C94' }}>
              Don't worry, you're not alone. Here are common challenges we help solve every day.
            </p>
          </div>

          {/* Grid View with Glassmorphism Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                <ProblemCard problem={problem} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className="min-h-screen relative overflow-hidden py-24 px-6 -mb-20 z-10" style={{ backgroundColor: '#F6F1F1', borderBottomLeftRadius: '80px', borderBottomRightRadius: '80px', }}>
        <div className="max-w-screen-2xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl lg:text-6xl font-regular uppercase tracking-wide"
              style={{ fontFamily: 'Unbounded, cursive', color: '#AFD3E2' }}
            >
              WHAT WE CAN DO FOR YOU
            </h2>
          </div>

          {/* Services List */}
          <div className="rounded-3xl overflow-hidden shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="divide-y" style={{ borderColor: '#AFD3E2' }}>
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-12" style={{ backgroundColor: '#146C94' }}>
                <div className="flex items-start md:items-center gap-6 flex-1">
                  <span style={{ color: '#F6F1F1' }} className="mt-1 md:mt-0">
                    <Smartphone className="w-8 h-8" />
                  </span>
                  <div>
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-3"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#F6F1F1' }}
                    >
                      One-on-One Smartphone Lessons
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed" style={{ color: '#AFD3E2' }}>
                      Personalized guidance on using phones, apps, and features with patient, step-by-step instruction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-12" style={{ backgroundColor: '#146C94' }}>
                <div className="flex items-start md:items-center gap-6 flex-1">
                  <span style={{ color: '#F6F1F1' }} className="mt-1 md:mt-0">
                    <ShieldCheck className="w-8 h-8" />
                  </span>
                  <div>
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-3"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#F6F1F1' }}
                    >
                      Online Safety Training
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed" style={{ color: '#AFD3E2' }}>
                      Learn how to avoid scams, protect accounts, and browse the internet wisely with confidence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-12" style={{ backgroundColor: '#146C94' }}>
                <div className="flex items-start md:items-center gap-6 flex-1">
                  <span style={{ color: '#F6F1F1' }} className="mt-1 md:mt-0">
                    <Settings className="w-8 h-8" />
                  </span>
                  <div>
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-3"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#F6F1F1' }}
                    >
                      App Assistance & Setup
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed" style={{ color: '#AFD3E2' }}>
                      Get hands-on help with GCash, Facebook, Zoom, and other essential apps for daily use.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-12" style={{ backgroundColor: '#146C94' }}>
                <div className="flex items-start md:items-center gap-6 flex-1">
                  <span style={{ color: '#F6F1F1' }} className="mt-1 md:mt-0">
                    <HelpingHand className="w-8 h-8" />
                  </span>
                  <div>
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-3"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#F6F1F1' }}
                    >
                      Patient, Friendly Support
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed" style={{ color: '#AFD3E2' }}>
                      Sessions are paced slowly and explained clearly — no tech jargon, just caring guidance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 5 (Free Consultation) */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-12" style={{ backgroundColor: '#19A7CE' }}>
                <div className="flex-1 mb-6 md:mb-0">
                  <h3
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#F6F1F1' }}
                  >
                    Free Consultation
                  </h3>
                  <p className="text-base md:text-lg" style={{ color: '#F6F1F1' }}>
                    Start your digital journey with a complimentary session
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <button
                      className="font-bold px-8 py-4 rounded-full text-base flex items-center gap-3 transition-all duration-300 shadow-xl animate-pulseGlow"
                      style={{
                        backgroundColor: '#F6F1F1',
                        color: '#146C94',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'linear-gradient(to right, #19A7CE, #AFD3E2)';
                        e.target.style.transform = 'translateY(-3px) scale(1.05)';
                        e.target.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#F6F1F1';
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                      }}
                      onClick={() => setIsModalOpen(true)}
                    >
                      BOOK A SESSION
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                  <span className="italic text-base line-through opacity-90" style={{ color: '#F6F1F1' }}>
                    worth ₱200
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section
        id='about'
        className="relative overflow-hidden py-24 px-6"
        style={{ background: 'linear-gradient(135deg, #146C94 0%, #19A7CE 50%, #AFD3E2 100%)' }}
      >
        {/* Overlay for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/20 z-0"></div>

        {/* Animated background blobs */}
        <div className="absolute inset-0">
          <div
            className="absolute w-64 h-64 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
            style={{
              background: 'linear-gradient(45deg, #F6F1F1, #AFD3E2)',
              top: '20%',
              left: '10%'
            }}
          ></div>
          <div
            className="absolute w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
            style={{
              background: 'linear-gradient(45deg, #AFD3E2, #19A7CE)',
              bottom: '20%',
              right: '10%'
            }}
          ></div>
          <div
            className="absolute w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"
            style={{
              background: 'linear-gradient(45deg, #19A7CE, #F6F1F1)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          ></div>
        </div>

        <div className="max-w-full mx-auto relative z-10 px-4 lg:px-12 m-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 mt-20">

            {/* Left side - Illustration */}
            <div className="lg:w-1/2 flex justify-center">
              <div
                className="relative w-100 max-w-md h-100 rounded-3xl flex items-center justify-center shadow-2xl animate-float hover:shadow-[0_0_25px_rgba(175,211,226,0.6)] transition-all duration-500"
                style={{
                  backgroundColor: 'rgba(246, 241, 241, 0.15)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(246, 241, 241, 0.2)'
                }}
              >
                {/* Use image instead of placeholder */}
                <img
                  src="/assets/4627185.jpg"
                  alt="Illustration"
                  className="w-100 h-100 object-contain rounded-lg"
                />

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#F6F1F1]/80"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-[#F6F1F1]/60"></div>
                <div className="absolute top-8 -left-8 w-6 h-6 rounded-full bg-[#F6F1F1]/40"></div>
                {/* Rotating ring */}
                <div className="absolute inset-0 rounded-3xl border-2 border-white/20 animate-spin-slow"></div>
              </div>
            </div>


            {/* Right side - Text content */}
            <div className="lg:w-1/2">
              <div
                className="p-8 rounded-3xl shadow-2xl"
                style={{
                  backgroundColor: 'rgba(246, 241, 241, 0.15)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(246, 241, 241, 0.2)'
                }}
              >
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 animate-fadeUp"
                  style={{
                    fontFamily: 'Unbounded, cursive',
                    color: '#F6F1F1',
                    textShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  We <span className="text-[#146C94]">understand</span> that learning technology can be <span>overwhelming</span>.
                </h2>

                <div className="w-16 h-1 mb-8 rounded-full bg-[#AFD3E2]"></div>

                <p
                  className="text-lg md:text-xl leading-relaxed mb-8 animate-fadeUp"
                  style={{
                    color: 'rgba(246, 241, 241, 0.9)',
                    fontFamily: 'Montserrat, sans-serif',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  That's why we use simple language, visual guides, and hands-on practice — all tailored to your pace and comfort level.
                </p>

                <div className="flex items-center gap-4">
                  <button
                    className="font-bold px-8 py-4 rounded-full text-base flex items-center gap-3 transition-all duration-300 shadow-xl animate-pulseGlow"
                    style={{
                      backgroundColor: '#F6F1F1',
                      color: '#146C94',
                      fontFamily: 'Montserrat, sans-serif'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(to right, #19A7CE, #AFD3E2)';
                      e.target.style.transform = 'translateY(-3px) scale(1.05)';
                      e.target.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#F6F1F1';
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                    }}
                  >
                    BOOK A SESSION
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*Testimonials Section  */}
      <section id='review' className="relative overflow-hidden py-24 px-6 -mt-20 z-10 " style={{
        background: 'linear-gradient(190deg, #AFD3E2 20%, #F6F1F1 50%, #F6F1F1 100%)', borderTopLeftRadius: '80px',
        borderTopRightRadius: '80px',
      }}>

        {/* Overlay for depth and texture */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 z-0"></div>

        {/* Enhanced floating orbs with new colors */}
        <div className="absolute inset-0">
          <div
            className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"
            style={{
              background: 'linear-gradient(45deg, #F6F1F1, #AFD3E2)',
              top: '10%',
              left: '5%'
            }}
          />
          <div
            className="absolute w-80 h-80 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"
            style={{
              background: 'linear-gradient(45deg, #AFD3E2, #19A7CE)',
              bottom: '15%',
              right: '10%'
            }}
          />
          <div
            className="absolute w-72 h-72 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"
            style={{
              background: 'linear-gradient(45deg, #19A7CE, #146C94)',
              top: '60%',
              left: '70%'
            }}
          />
          {/* Additional magical sparkles */}
          <div
            className="absolute w-32 h-32 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-6000"
            style={{
              background: 'linear-gradient(45deg, #F6F1F1, #AFD3E2)',
              top: '30%',
              right: '25%'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 drop-shadow-lg"
              style={{
                fontFamily: 'Unbounded, cursive',
                color: '#146C94'
              }}
            >
              What Our Customers Say
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed drop-shadow-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#146C94' }}>
              Real stories from seniors who've transformed their digital experience with ClickCare's patient guidance and personalized support.
            </p>
          </div>

          <TestimonialsCarousel />
        </div>

        {/* FAQs Section - Accordion Style */}
        <section id="faqs" className="min-h-[60vh] relative overflow-hidden py-20 px-6 flex items-start bg-[#F6F1F1]" style={{ borderRadius: '40px', marginTop: '40px' }}>
          <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-12">
            {/* Left: Title & CTA */}
            <div className="md:w-1/ flex flex-col justify-between items-start">
              <div>
                <h2 className="text-5xl md:text-6xl font-regular leading-tight mb-8" style={{ fontFamily: 'Unbounded, cursive', color: '#146C94', letterSpacing: '2px' }}>
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="mt-16 md:mt-auto">
                <div className="mb-4 text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#146C94' }}>
                  Do you have any more questions?
                </div>
                <button className="flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-200" style={{ background: '#19A7CE', color: '#F6F1F1', fontFamily: 'Montserrat, sans-serif' }} onMouseEnter={e => { e.target.style.background = '#AFD3E2'; e.target.style.color = '#146C94'; }} onMouseLeave={e => { e.target.style.background = '#19A7CE'; e.target.style.color = '#F6F1F1'; }}>
                  Contact <span style={{ display: 'inline-block', transform: 'rotate(-45deg)' }}>&#8594;</span>
                </button>
              </div>
            </div>
            {/* Right: Accordion List */}
            <div className="md:w-4/3 flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <FAQAccordion key={idx} faq={faq} idx={idx} />
              ))}
            </div>
          </div>
        </section>
      </section>

      <ClickCareFooter />

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white rounded-3xl shadow-2xl p-10 w-[90%] max-w-lg relative animate-fadeUp"
            style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#146C94] font-bold text-2xl hover:scale-110 transition-transform"
            >
              ×
            </button>

            {/* Header */}
            <h2 className="text-3xl font-bold mb-2 text-center"
              style={{ fontFamily: 'Unbounded, cursive', color: '#146C94' }}>
              Book a Session
            </h2>
            <p className="text-center mb-6 text-[#146C94]">
              You selected: <strong>{selectedService}</strong>
            </p>

            {/* Booking Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();

                emailjs
                  .send(
                    'service_u2h69ld',   // service ID
                    'template_m9oyyov',  // booking email template
                    formData,
                    '4Gd6anwA9I4OhPkDU'  // public key
                  )
                  .then(() => {
                    // Send auto-reply email (confirmation to user)
                    return emailjs.send(
                      'service_u2h69ld',
                      'template_g2v1n9t', // auto-reply template
                      formData,
                      '4Gd6anwA9I4OhPkDU'
                    );
                  })
                  .then(() => {
                    alert('✅ Booking request sent successfully! A confirmation email has been sent to you.');
                    setIsModalOpen(false);
                    setFormData({
                      from_name: '',
                      from_email: '',
                      service_type: '',
                      booking_date: '',
                      message: '',
                    });
                  })
                  .catch((error) => {
                    console.error('Email send error:', error.text || error);
                    alert('❌ Failed to send. Please try again.');
                  });
              }}

              className="space-y-5"
            >
              {/* Full Name */}
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                value={formData.from_name}
                onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-[#19A7CE] transition"
              />

              {/* Email */}
              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                value={formData.from_email}
                onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-[#19A7CE] transition"
              />

              {/* Service Type */}
              <input
                type="text"
                name="service_type"
                placeholder="Service Type (optional)"
                value={formData.service_type || selectedService}
                onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
                className="w-full border border-gray-300 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-[#19A7CE] transition"
              />

              {/* Preferred Date */}
              <input
                type="date"
                name="booking_date"
                value={formData.booking_date}
                onChange={(e) => setFormData({ ...formData, booking_date: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-[#19A7CE] transition"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="4"
                required
                className="w-full border border-gray-300 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-[#19A7CE] transition resize-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full font-bold px-6 py-3 rounded-full text-base shadow-md transition-all duration-300"
                style={{
                  backgroundColor: '#19A7CE',
                  color: '#F6F1F1',
                  fontFamily: 'Montserrat, sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #19A7CE, #AFD3E2)';
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#19A7CE';
                  e.target.style.transform = 'translateY(0) scale(1)';
                }}
              >
                Send Booking Request
              </button>
            </form>

          </div>
        </div>
      )}







      {/* Enhanced Animations */}
      <style>{`
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob { animation: blob 8s infinite; }
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-4000 { animation-delay: 4s; }
  .animation-delay-6000 { animation-delay: 6s; }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .animate-float { animation: float 4s ease-in-out infinite; }

  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow { animation: spin-slow 20s linear infinite; }

  @keyframes fadeUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeUp { animation: fadeUp 1s ease-out forwards; }

  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 0 0 rgba(246,241,241,0.6); }
    50% { box-shadow: 0 0 20px 5px rgba(246,241,241,0.4); }
  }
  .animate-pulseGlow { animation: pulse-glow 2s infinite; }
  
  @keyframes fadeIn {
    from { 
      opacity: 0; 
      transform: translateY(10px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes testimonialSlide {
    0% { opacity: 0; transform: translateY(30px) rotateX(15deg); }
    100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
  }
  
  .testimonial-card-enter { animation: testimonialSlide 0.6s ease-out forwards; }
`}</style>



      {/* Floating Book a Session Button */}
      <div style={{
        position: 'fixed',
        right: '2rem',
        bottom: '2rem',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
      }}>
        <button
          className="font-bold px-8 py-4 rounded-full text-base flex items-center gap-3 shadow-xl transition-all duration-300 animate-pulseGlow"
          style={{
            backgroundColor: '#19A7CE',
            color: '#F6F1F1',
            fontFamily: 'Montserrat, sans-serif',
            boxShadow: '0 8px 24px rgba(25,167,206,0.15)',
          }}
          onMouseEnter={e => {
            e.target.style.backgroundColor = '#AFD3E2';
            e.target.style.color = '#146C94';
          }}
          onMouseLeave={e => {
            e.target.style.backgroundColor = '#19A7CE';
            e.target.style.color = '#F6F1F1';
          }}
          onClick={() => setIsModalOpen(true)}
        >
          BOOK A SESSION
          <span style={{ display: 'inline-block', transform: 'rotate(-45deg)' }}>&#8594;</span>
        </button>
      </div>
    </>
  );
};

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    { avatar: '/assets/avatar1.jpg', name: 'Maria Santos', title: 'Grandmother of 5', quote: 'ClickCare helped me connect with my grandchildren through video calls—I never miss a moment now.' },
    { avatar: '/assets/avatar2.jpg', name: 'Roberto Cruz', title: 'Retired Teacher', quote: 'I was terrified of online banking at first, but now I feel safe and independent managing my money.' },
    { avatar: '/assets/avatar3.jpg', name: 'Luz Reyes', title: 'Proud Mother of 3', quote: 'The GCash lessons were amazing! I can now pay bills and send money with ease.' },
    { avatar: '/assets/avatar4.jpg', name: 'Carmen Dela Cruz', title: 'Connecting with friends on Facebook', quote: 'Ive reconnected with long-lost friends—Facebook feels like a reunion every day.' },
    { avatar: '/assets/avatar5.jpg', name: 'Jose Mendoza', title: 'Learning online safety and scam prevention', quote: 'The scam prevention lessons gave me peace of mind—I know how to protect myself online.' },
    { avatar: '/assets/avatar1.jpg', name: 'Aurora Bautista', title: 'Using Zoom for family gatherings', quote: 'Family reunions are back! Thanks to Zoom, we laugh and share stories like before.' },
    { avatar: '/assets/avatar2.jpg', name: 'Fernando Garcia', title: 'Overcoming age-related learning concerns', quote: 'At first I thought I was too old to learn, but ClickCare proved that it’s never too late.' },
    { avatar: '/assets/avatar4.jpg', name: 'Esperanza Flores', title: 'Building confidence with smartphones', quote: 'I used to be scared of touching the wrong button. Now, I feel confident exploring my phone.' },
  ];


  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);

  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * itemsPerPage;
    return testimonials.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {getCurrentTestimonials().map((t, i) => (
          <div
            key={`${currentIndex}-${i}`}
            className="relative p-8 rounded-3xl shadow-testimonials backdrop-blur-xl border border-white/100 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-white/30"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm shadow-lg border border-white/30 overflow-hidden">
              <img src={t.avatar} alt={t.name + ' avatar'} className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="mt-8 mb-6">
              <p className="italic text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                "{t.quote}"
              </p>
            </div>
            <h4 className="text-lg font-bold text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t.name}</h4>
            <p className="text-sm text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t.title}</p>

            {/* Subtle shine effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      {/* Enhanced Navigation */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className="flex gap-3 mx-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === i
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/40 hover:bg-white/60 hover:scale-110'
                }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  );
}

export default ClickCareHero;