// // static/js/main.js

// document.addEventListener('DOMContentLoaded', (event) => {
//     // 檢查是否有儲存的模式
//     const savedMode = localStorage.getItem('mode');
//     if (savedMode) {
//         document.body.className = savedMode;
//     }
// });

// function toggleMode() {
//     if (document.body.classList.contains('light-mode')) {
//         document.body.classList.remove('light-mode');
//         document.body.classList.add('dark-mode');
//         localStorage.setItem('mode', 'dark-mode');
//     } else {
//         document.body.classList.remove('dark-mode');
//         document.body.classList.add('light-mode');
//         localStorage.setItem('mode', 'light-mode');
//     }
// }


// static/js/main.js

document.addEventListener('DOMContentLoaded', (event) => {
    // 檢查是否有儲存的主題
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = `${savedTheme}-theme`;
    }

    // // 側欄收合邏輯
    // document.getElementById('sidebarCollapse').addEventListener('click', function () {
    //     document.getElementById('sidebar').classList.toggle('active');
    // });
});

function setTheme(theme) {
    document.body.className = `${theme}-theme`;
    localStorage.setItem('theme', `${theme}-theme`);
}


document.addEventListener('DOMContentLoaded', (event) => {
    // 获取侧栏和按钮元素
    const sidebar = document.getElementById('sidebar');
    const collapseButtonInside = document.getElementById('sidebarCollapseInside');
    const collapseButtonOutside = document.getElementById('sidebarCollapseOutside');

    // 内部收合按钮点击事件
    collapseButtonInside.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        collapseButtonOutside.style.display = 'block'; // 显示外部展开按钮
    });

    // 外部展开按钮点击事件
    collapseButtonOutside.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        collapseButtonOutside.style.display = 'none'; // 隐藏外部展开按钮
    });
});







  