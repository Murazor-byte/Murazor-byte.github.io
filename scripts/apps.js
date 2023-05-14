document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
          entry.target.classList.add('show');
<<<<<<< HEAD
        } 
=======
        }
>>>>>>> a96259d317999a16dc13cd31d779e386055e6d7c
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  });

console.log(hiddenElements);
console.log(observer);
