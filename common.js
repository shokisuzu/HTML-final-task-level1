"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const navRight = document.querySelector('.navbar .ms-auto');

    if (isLoggedIn && navRight) {
        navRight.innerHTML = `
            <ul class="navbar-nav align-items-center">
                <li class="nav-item"><a class="nav-link text-white" href="my-travel-list.html"><i class="bi bi-geo-alt-fill me-1"></i>行きたいリスト</a></li>
                <li class="nav-item dropdown ms-lg-3">
                    <a class="nav-link dropdown-toggle text-white d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                        <i class="bi bi-person-circle fs-5 me-2"></i> トラベラー
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end shadow">
                        <li><a class="dropdown-item" href="#"><i class="bi bi-camera me-2"></i>投稿した写真</a></li>
                        <li><a class="dropdown-item" href="#"><i class="bi bi-gear me-2"></i>設定</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item text-danger" href="#" id="logoutBtn"><i class="bi bi-box-arrow-right me-2"></i>ログアウト</a></li>
                    </ul>
                </li>
            </ul>
        `;
        
        document.getElementById('logoutBtn').addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            location.href = 'index.html';
        });
    }

    // スクロールでトップに戻る
    const topBtn = document.getElementById("backToTopBtn");
    window.addEventListener("scroll", () => {
        if (topBtn) topBtn.style.display = window.scrollY > 400 ? "flex" : "none";
    });
    topBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
});