   // Testimonials Data
   const testimonials = [
    {
      id: 1,
      content: "“The host was very friendly.the establishment hosts cleanliness like no other.well maintened.”",
      author: "Nirmala",
      // role: "Family Traveler",
      // image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      content: "Pleasant stay overall, owner very hospitable and helpful.",
      author: "Mfundo",
      // role: "Business Traveler",
      // image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      content: "What can i say, we had a good stay. The place is clean and well maintained. The owner is very hospitable and helpful. I would recommend this place to anyone looking for a peaceful stay.",
      author: "Nkosinati",
      // role: "Honeymoon Couple",
      // image: "/api/placeholder/80/80"
    }
  ];

  // Testimonial Slider
  let currentTestimonialIndex = 0;
  const currentTestimonialElement = document.getElementById('current-testimonial');
  const prevTestimonialBtn = document.getElementById('prev-testimonial');
  const nextTestimonialBtn = document.getElementById('next-testimonial');

  function updateTestimonial() {
    const testimonial = testimonials[currentTestimonialIndex];
    currentTestimonialElement.innerHTML = `
      <div class="testimonial-content">
        "${testimonial.content}"
      </div>
      <div class="testimonial-author">${testimonial.author}</div>
    `;
  }

  prevTestimonialBtn.addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
  });

  nextTestimonialBtn.addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonial();
  });