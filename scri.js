document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const closeMenu = document.getElementById('closeMenu');

    menuToggle.addEventListener('click', function() {
        dropdownMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', function() {
        dropdownMenu.classList.remove('active');
    });

    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('dropdown');
    const dropdownMenu = document.getElementById('dropMenu');

    dropdownToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('dropDown');
    const dropdownMenu = document.getElementById('dropmenu');

    dropdownToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('drop-down');
    const dropdownMenu = document.getElementById('drop-Menu');

    dropdownToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('drop-Down');
    const dropdownMenu = document.getElementById('drop-menu');

    dropdownToggle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});