
const menu = [
    {
      id: 1,
      title: "Cheeseburger",
      category: "lunch",
      price: 7.99,
      img: "./images/cheeseburger.png",
      desc: `This is a delicious cheeseburger `,
    },
    {
      id: 2,
      title: "Mac n Cheese",
      category: "lunch",
      price: 8.99,
      img: "./images/macncheese.jpg",
      desc: `This is delicious mac n cheese `,
    },
    {
      id: 3,
      title: "Spaghetti",
      category: "lunch",
      price: 9.99,
      img: "./images/spaghetti.jpg",
      desc: `This is delicious spaghetti `,
    },
    {
      id: 4,
      title: "Fettuccine Alfredo",
      category: "lunch",
      price: 12.99,
      img: "./images/fettuccinealfredo.jpg",
      desc: `This is delicious fettucini alfredo `,
    },
    {
        id: 5,
        title: "Sirloin Steak",
        category: "dinner",
        price: 15.99,
        img: "./images/sirloinsteak.jpg",
        desc: `This is a delicious sirloin steak `,
      },
    {
        id: 6,
        title: "Breakfast Burrito",
        category: "breakfast",
        price: 8.99,
        img: "./images/breakfastburrito.jpg",
        desc: `This is a delicious breakfast burrito `,
    },
    {
        id: 7,
        title: "Pancakes",
        category: "breakfast",
        price: 6.99,
        img: "./images/pancakes.jpg",
        desc: `This is a delicious pancake `,
    },
  ];

  const sectionCenter = document.querySelector(".section-center");
  const buttonContainer = document.querySelector(".btn-container");

  window.addEventListener("DOMContentLoaded", () => {
      displayMenuItems(menu);
      displayMenuButtons();
  });

  function displayMenuItems(menuItems) {
    const displayMenu = menuItems.map((item) => {
        return `<article class="menu-item">
                  <img src="${item.img}" alt="${item.title}" class="picture">
                      <div class="item-info">
                          <header>
                              <h4>${item.title}</h4>
                              <h4 class="price">${item.price}</h4>
                          </header>
                          <p class="item-text">${item.desc}</p>
                      </div>
                  </article>`;
    }).join("");
    sectionCenter.innerHTML = displayMenu;
  }

  function displayMenuButtons() {
      const categories = menu.reduce((values, item) => {
        if (!values.includes(item.category))
            values.push(item.category);  
        return values;
      }, 
      ["all"]
      );
      const categoryButtons = categories.map((category) => {
          return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;

      }).join("");
      buttonContainer.innerHTML = categoryButtons;
      const btnFilter = document.querySelectorAll(".filter-btn");

      btnFilter.forEach( (button) => {
        button.addEventListener("click", (event) => {
            const menuSelected = event.currentTarget.dataset.id;
            const menuDisplayed = menu.filter((menuItem) => {
                if (menuItem.category === menuSelected)
                    return menuItem;
                console.log(menuSelected);
            });
    
            if (menuSelected === "all")
                displayMenuItems(menu);
            else
                displayMenuItems(menuDisplayed);
        });
      });
  }