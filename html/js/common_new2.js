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

    // sale acc
    const saleAccs = document.querySelectorAll('.btn_open_sale_detail');
    saleAccs && saleAccs.forEach(btn => {
        btn.addEventListener("click", function(e) {
            btn.classList.toggle('is-active');
            btn.nextElementSibling.classList.toggle('is-active');
        });
    });

    // 수량 조절
    const quantityInput = document.getElementById('quantityInput');
    const btnMinus = document.querySelector('.btn_minus');
    const btnPlus = document.querySelector('.btn_plus');

    btnMinus.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 1) {
            quantityInput.value = currentQuantity - 1;
        }
    });

    btnPlus.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
    });

})();