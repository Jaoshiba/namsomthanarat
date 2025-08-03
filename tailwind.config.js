// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        // Staggered animations with delays for smoother transitions
        'fade-in-up-delay-1': 'fadeInUp 1s ease-out 0.2s forwards',
        'fade-in-up-delay-2': 'fadeInUp 1s ease-out 0.4s forwards',
        'fade-in-up-delay-3': 'fadeInUp 1s ease-out 0.6s forwards',
        'fade-in-up-delay-4': 'fadeInUp 1s ease-out 0.8s forwards',
        'fade-in-up-delay-5': 'fadeInUp 1s ease-out 1s forwards',
        'fade-in-up-delay-6': 'fadeInUp 1s ease-out 0.2s forwards',
        'fade-in-up-delay-7': 'fadeInUp 1s ease-out 0.4s forwards',
        'fade-in-up-delay-8': 'fadeInUp 1s ease-out 0.6s forwards',
        'fade-in-up-delay-9': 'fadeInUp 1s ease-out 0.8s forwards',
        'fade-in-up-delay-10': 'fadeInUp 1s ease-out 1s forwards',
        'fade-in-up-delay-11': 'fadeInUp 1s ease-out 1.2s forwards',
        'fade-in-up-delay-12': 'fadeInUp 1s ease-out 1.4s forwards',
      },
      keyframes: {
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};