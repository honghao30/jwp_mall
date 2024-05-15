(function () {
    //dropdown menu  
    const dropdownMenus = document.querySelectorAll('.dropdown_menu_wrap');

    function handleDropdownMenu(menu) {
        const selectedOptionButton = menu.querySelector('.btn-dropdown');
        const optionList = menu.querySelectorAll('.dropdown_list li button');
    
        function toggleMenu() {
            menu.classList.toggle('is-active');
            selectedOptionButton.classList.toggle('is-active');
            selectedOptionButton.nextElementSibling.classList.toggle('is-active');
        }
    
        selectedOptionButton.addEventListener('click', toggleMenu);
    
        optionList.forEach(option => {
            option.addEventListener('click', () => {
                const selectedValue = option.getAttribute('data-option');
                selectedOptionButton.textContent = selectedValue;
    
                menu.querySelectorAll('.dropdown_list li').forEach(item => {
                    item.classList.remove('is-active');
                });
    
                option.parentElement.classList.add('is-active');
                toggleMenu();
            });
        });
    
        document.addEventListener("click", function(e) {
            if (menu.classList.contains('is-active') && !e.target.closest('.dropdown_menu_wrap')) {
                menu.classList.remove('is-active');
                selectedOptionButton.classList.remove('is-active');
                selectedOptionButton.nextElementSibling.classList.remove('is-active');
            }
        });
    }

    dropdownMenus.forEach(handleDropdownMenu);  

  //toggle
    const toggleButtons = document.querySelectorAll('.is-toggle');
    toggleButtons && toggleButtons.forEach(toggle => {
        toggle.addEventListener("click", function(e) {
            toggle.classList.toggle('is-active');
        });
    });

    // tab
    function showTab(tabIndex) {
        const tabItems = document.querySelectorAll('.product_detail_tab_menu button');
        tabItems.forEach((tabItem, index) => {
            if (index === tabIndex) {
                tabItem.classList.add('active');
            } else {
                tabItem.classList.remove('active');
            }
        });
        
        const tabContents = document.querySelectorAll('.product_detail_tab_cont');
        tabContents.forEach((tabContent, index) => {
            if (index === tabIndex) {
                tabContent.classList.add('active');
            } else {
                tabContent.classList.remove('active');
            }
        });
    }       

    // sale acc
    const saleAccs = document.querySelectorAll('.sales_info_scroll ul > .sale_item');
    saleAccs && saleAccs.forEach(acc => {
        acc.addEventListener("click", function(e) {
            acc.classList.toggle('is-active');            
        });
    });

    const viewDeliveryTimes = document.querySelectorAll('.btn_open_sale_detail');

    viewDeliveryTimes.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
    
            btn.classList.toggle('is-active');
    
            const nextElement = btn.nextElementSibling;
            if (nextElement) {
                nextElement.classList.toggle('is-active');
            }
        });
    });
    

    // 수량 조절
    const quantityInput = document.getElementById('quantityInput');
    const btnMinus = document.querySelector('.btn_minus');
    const btnPlus = document.querySelector('.btn_plus');

    btnMinus && btnMinus.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 1) {
            quantityInput.value = currentQuantity - 1;
        }
    });

    btnPlus && btnPlus.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
    });

})();