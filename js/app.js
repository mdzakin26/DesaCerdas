
        // Inisialisasi Framework7
        var app = new Framework7({
            root: '#app',
            theme: 'ios',
            name: 'E-Desa',
            id: 'com.edesa.app',
        });

        // Data autentikasi
        const validUsers = {
            'admin': 'admin123',
            'user': 'user123',
            'desa': 'desa123',
            'pengguna': 'pengguna123'
        };

        // Data materi pelajaran
        const subjectData = {
            'jurnal': {
                title: 'Jurnal',
                chapters: [
                    {
                        id: 'jrnl-1',
                        title: 'Kemampuan Komunikasi Matematis Siswa SMP',
                        description: 'Pelajari tentang kemampuan komunikasi matematis siswa SMP melalui jurnal ini.',
                        file: 'pdf/kemampuan komunikasi matematis siswa smp.pdf'
                    },
                    {
                        id: 'jrnl-2',
                        title: 'Pembekalan Materi CHSE',
                        description: 'Pengenalan konsep CHSE (Clean, Health, Safety, Environment) untuk pengelolaan desa wisata.',
                        file: 'pdf/pembekalan materi chse.pdf'
                    },
                    {
                        id: 'jrnl-3',
                        title: 'pengetahuan hukum materi muatan.pdf',
                        description: 'Analisis pengetahuan hukum masyarakat desa berdasarkan materi muatan lokal.',
                        file: 'pdf/pengetahuan hukum materi muatan.pdf'
                    }
                ]
            },
            'youtube': {
                title: 'Youtube',
                chapters: [
                    {
                        id: 'yt-1',
                        title: 'Mengenal Sistem Pemerintahan Desa dan Kota',
                        description: 'Mempelajari struktur dan fungsi pemerintahan desa dan kota di Indonesia.',
                        file: 'https://www.youtube.com/embed/oj07JnmAR4Q?si=Xc0H1Jjnvbaqq7uX'
                    },
                    {
                        id: 'yt-2',
                        title: 'Pola Keruangan Desa dan Ciri-cirinya',
                        description: 'Memahami pola keruangan desa serta ciri-ciri khas yang membedakannya dari wilayah lain.',
                        file: 'https://www.youtube.com/embed/3b2Y6KXJ7yM?si=1j1b0kYlY8Yk1r5Ehttps://www.youtube.com/embed/YCUhdRzBsM8?si=SuEDweQ7JSjq7u3K'
                    },
                    {
                        id: 'yt-3',
                        title: 'Pengertian dan Karakteristik Desa',
                        description: 'Pengenalan tentang desa, karakteristiknya, serta peran pentingnya dalam pembangunan nasional.',
                        file: 'https://www.youtube.com/embed/4_rkLhHB8VQ?si=a_Lp7zQ_vU50k9uZ'
                    },
                    {
                        id: 'yt-4',
                        title: 'Administrasi Pemerintahan Desa',
                        description: 'Teknik dan prosedur administrasi pemerintahan desa yang efektif dan efisien.',
                        file: 'https://www.youtube.com/embed/jrmgEWoQmms?si=aInrrCeSw3yLWrW8'
                    }
                ]
            },
            'artikel': {
                title: 'Artikel',
                chapters: [
                    {
                        id: 'art-1',
                        title: 'Desa Cerdas Merupakan Basis Pembangunan Indonesia yang tidak meninggalkan relijiusitas dan budaya lokal desa',
                        description: 'Konsep desa cerdas sebagai fondasi pembangunan berkelanjutan di Indonesia.',
                        file: 'https://dpmd.jemberkab.go.id/artikel/desa-cerdas-smart-village/desa-cerdas-smart-village/64/desa-cerdas-merupakan-basis-pembangunan-indonesia-yang-tidak-meninggalkan-relijiusitas-dan-budaya-lokal-desa'
                    },
                    {
                        id: 'art-2',
                        title: 'Meningkatkan Kualitas Pendidikan di Desa: Kunci Kemajuan Generasi Muda',
                        description: 'Strategi dan inisiatif untuk meningkatkan kualitas pendidikan di daerah pedesaan.',
                        file: 'https://gondoharum.kendalkab.go.id/kabardetail/Qk9nczdkRlhVWVFZclcvcXA4SWxMdz09/meningkatkan-kualitas-pendidikan-di-desa--kunci-kemajuan-generasi-muda.html'
                    },
                    {
                        id: 'art-3',
                        title: 'Membangun Desa Dengan Peduli Pendidikan Dini Untuk Anak',
                        description: 'Pentingnya pendidikan dini dalam pembangunan desa yang berkelanjutan.',
                        file: 'http://margosari-patebon.desa.id/kegiatandetail/UUh1dVF1Q0ZRSUdtQVh3VmlTdWtpQT09/membangun-desa-dengan-peduli-pendidikan-dini-untuk-anak.html'
                    },
                    {
                        id: 'art-4',
                        title: 'Peran Desa Mendukung Pendidikan Anak Usia Dini',
                        description: 'Bagaimana desa dapat berkontribusi dalam mendukung pendidikan anak usia dini.',
                        file: 'https://disdikpora.bulelengkab.go.id/informasi/detail/artikel/60_peran-desa-mendukung-pendidikan-anak-usia-dini'
                    }
                ]
            }
        };

        // Data quiz
        const quizData = {
            'mudah': [
                {
                    question: 'Apa tujuan utama aplikasi E-Desa?',
                    options: [
                        'Untuk menghibur masyarakat desa',
                        'Untuk mempermudah akses informasi dan layanan desa',
                        'Untuk menggantikan pemerintahan desa',
                        'Untuk menarik investor ke desa'
                    ],
                    correctAnswer: 2
                },
                {
                    question: 'Fitur mana yang TIDAK tersedia di E-Desa?',
                    options: [
                        'Materi pembelajaran',
                        'Quiz interaktif',
                        'Permainan online',
                        'Informasi desa'
                    ],
                    correctAnswer: 3
                }
            ],
            'sedang': [
                {
                    question: 'Apa manfaat utama E-Desa bagi transparansi pemerintahan desa?',
                    options: [
                        'Menyembunyikan informasi anggaran',
                        'Mempermudah akses informasi program desa',
                        'Mengurangi partisipasi masyarakat',
                        'Memperlambat proses administrasi'
                    ],
                    correctAnswer: 2
                },
                {
                    question: 'Bagaimana E-Desa mendukung pemberdayaan masyarakat?',
                    options: [
                        'Dengan membatasi akses informasi',
                        'Dengan meningkatkan partisipasi masyarakat dalam pembangunan desa',
                        'Dengan menggantikan peran pemerintah desa',
                        'Dengan mengurangi interaksi sosial'
                    ],
                    correctAnswer: 2
                }
            ],
            'sulit': [
                {
                    question: 'Apa tantangan utama dalam implementasi E-Desa di daerah terpencil?',
                    options: [
                        'Ketersediaan infrastruktur internet',
                        'Kurangnya minat masyarakat',
                        'Terlalu banyak fitur',
                        'Biaya aplikasi yang mahal'
                    ],
                    correctAnswer: 1
                },
                {
                    question: 'Bagaimana E-Desa dapat mendukung pembangunan berkelanjutan di desa?',
                    options: [
                        'Dengan fokus hanya pada pembangunan fisik',
                        'Dengan mengabaikan aspek lingkungan',
                        'Dengan mengintegrasikan aspek sosial, ekonomi, dan lingkungan',
                        'Dengan memprioritaskan urbanisasi'
                    ],
                    correctAnswer: 3
                }
            ]
        };

        // Variabel state aplikasi
        let currentPage = 'login';
        let currentUser = null;
        let currentQuizDifficulty = null;
        let currentQuestionIndex = 0;
        let userAnswers = [];

        // Fungsi untuk mengganti halaman
        function showPage(pageId) {
            // Sembunyikan semua halaman
            document.querySelectorAll('.page').forEach(function (page) {
                page.classList.add('page-hidden');
            });

            // Tampilkan halaman yang dipilih
            document.getElementById(pageId + '-page').classList.remove('page-hidden');

            // Tampilkan atau sembunyikan toolbar
            if (pageId === 'login') {
                document.getElementById('main-toolbar').classList.add('page-hidden');
            } else {
                document.getElementById('main-toolbar').classList.remove('page-hidden');

                // Perbarui tab aktif
                document.querySelectorAll('.tab-link').forEach(function (tab) {
                    tab.classList.remove('tab-link-active');
                });
                document.querySelector('.tab-link[data-page="' + pageId + '"]').classList.add('tab-link-active');
            }

            // Simpan halaman saat ini
            currentPage = pageId;
        }

        // Fungsi untuk login
        function login(username, password) {
            // Validasi login
            if (username && password) {
                if (validUsers[username] && validUsers[username] === password) {
                    currentUser = username;

                    // Update UI dengan nama pengguna
                    document.getElementById('user-welcome').textContent = `Selamat Datang, ${username}`;
                    document.getElementById('profile-name').textContent = username;

                    // Sembunyikan pesan error jika ada
                    document.getElementById('login-error').style.display = 'none';

                    // Tampilkan halaman home
                    showPage('home');
                } else {
                    // Tampilkan pesan error
                    document.getElementById('login-error').style.display = 'block';
                }
            } else {
                // Tampilkan pesan error
                document.getElementById('login-error').style.display = 'block';
            }
        }

        // Fungsi untuk logout
        function logout() {
            currentUser = null;
            // Reset form login
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            document.getElementById('login-error').style.display = 'none';
            showPage('login');
        }

        // Fungsi untuk menampilkan detail materi belajar
        function showSubjectDetail(subjectId) {
            const subject = subjectData[subjectId];
            if (subject) {
                // Set judul materi
                document.getElementById('detail-subject-title').textContent = subject.title;

                // Kosongkan daftar bab
                const chapterList = document.getElementById('chapter-list');
                chapterList.innerHTML = '';

                // Tambahkan daftar bab
                subject.chapters.forEach(chapter => {
                    const chapterItem = document.createElement('div');
                    chapterItem.className = 'chapter-item';
                    chapterItem.innerHTML = `
                <div class="chapter-header">
                    <div class="chapter-icon">
                        <i class="f7-icons">doc_fill</i>
                    </div>
                    <div class="chapter-title">${chapter.title}</div>
                </div>
                <div class="chapter-desc">${chapter.description}</div>
            `;

                    // Klik chapter → buka file/link
                    chapterItem.addEventListener('click', () => {
                        openChapterFile(chapter);
                    });

                    chapterList.appendChild(chapterItem);
                });

                showPage('detail-subject');
            }
        }

        // Fungsi untuk membuka file atau link bab
        function openChapterFile(chapter) {
            // Jika file adalah PDF offline
            if (chapter.file.endsWith('.pdf')) {
                window.open(chapter.file, '_blank');
            }
            // Jika file adalah link YouTube atau artikel
            else if (chapter.file.startsWith('http')) {
                window.open(chapter.file, '_blank');
            }
            else {
                console.error("Format file tidak dikenali:", chapter.file);
            }
        }

        // Fungsi untuk memulai quiz
        function startQuiz(difficulty) {
            currentQuizDifficulty = difficulty;
            currentQuestionIndex = 0;
            userAnswers = [];

            // Set judul quiz berdasarkan tingkat kesulitan
            let difficultyText = '';
            switch (difficulty) {
                case 'mudah':
                    difficultyText = 'Mudah';
                    break;
                case 'sedang':
                    difficultyText = 'Sedang';
                    break;
                case 'sulit':
                    difficultyText = 'Sulit';
                    break;
            }

            document.getElementById('detail-quiz-title').textContent = `Quiz - Tingkat ${difficultyText}`;

            // Tampilkan pertanyaan pertama
            showQuestion(0);
            showPage('detail-quiz');
        }

        // Fungsi untuk menampilkan pertanyaan
        function showQuestion(index) {
            const questions = quizData[currentQuizDifficulty];
            if (index >= questions.length) {
                // Quiz selesai, tampilkan hasil
                showQuizResults();
                return;
            }



            const question = questions[index];
            document.getElementById('question-text').textContent = question.question;

            // Bersihkan pilihan jawaban sebelumnya
            const answerOptions = document.querySelectorAll('.answer-option');
            answerOptions.forEach(option => {
                option.classList.remove('selected');
                option.textContent = question.options[parseInt(option.dataset.answer) - 1];
            });

            // Perbarui status tombol navigasi
            document.getElementById('prev-question').disabled = index === 0;
            document.getElementById('next-question').textContent =
                index === questions.length - 1 ? 'Selesai' : 'Selanjutnya';

            currentQuestionIndex = index;
        }

        // Fungsi untuk menampilkan hasil quiz
        function showQuizResults() {
            const questions = quizData[currentQuizDifficulty];
            let correctCount = 0;

            // Hitung jawaban benar
            for (let i = 0; i < questions.length; i++) {
                if (userAnswers[i] === questions[i].correctAnswer) {
                    correctCount++;
                }
            }
            const totalQuestions = questions.length;
            const score = Math.round((correctCount / questions.length) * 100);

            // Simpan score ke localStorage (untuk halaman achievement)
            let quizKey = '';
            switch (currentQuizDifficulty) {
                case 'mudah': quizKey = 'quiz1Score'; break;
                case 'sedang': quizKey = 'quiz2Score'; break;
                case 'sulit': quizKey = 'quiz3Score'; break;
            }

            // Update score hanya jika lebih tinggi dari yang sudah ada (Opsional: fitur gamifikasi)
            const currentHighscore = parseInt(localStorage.getItem(quizKey)) || 0;
            if (score > currentHighscore) {
                localStorage.setItem(quizKey, score);
            }


            // Tampilkan alert dengan hasil
            alert(`Quiz selesai!\n\nHasil: ${correctCount} dari ${questions.length} benar\nSkor: ${score}%`);

            // Kembali ke halaman quiz
            showPage('quiz');
        }
        var achievementList = [
            { judul: "Quiz Tingkat Mudah", key: "quiz1Score" },
            { judul: "Quiz Tingkat Sedang", key: "quiz2Score" },
            { judul: "Quiz Tingkat Sulit", key: "quiz3Score" }
        ];

        function getBadge(score) {
            if (score >= 80) return `<span class="badge gold">GOLD</span>`;
            if (score >= 50) return `<span class="badge silver">SILVER</span>`;
            if (score > 0) return `<span class="badge bronze">BRONZE</span>`;
            return `<span class="badge none">NONE</span>`;
        }

        function getTrophyIcon(score) {
            if (score >= 80) return `🥇`;
            if (score >= 50) return `🥈`;
            if (score > 0) return `🥉`;
            return `🎖️`;
        }

        function loadAchievements() {
            var output = "";
            const listAchievementElement = document.getElementById("listAchievement");
            if (!listAchievementElement) return;

            achievementList.forEach(item => {
                let score = parseInt(localStorage.getItem(item.key)) || 0;

                output += `
                    <div class="achv-card fade-in">
                        <div class="achv-left">
                            <div class="trophy-icon">${getTrophyIcon(score)}</div>
                            <div>
                                <div class="achv-title">${item.judul}</div>
                                <div class="achv-score">Score: <strong>${score}</strong></div>
                            </div>
                        </div>

                        <div class="achv-right">
                            ${getBadge(score)}
                        </div>
                    </div>
                `;
            });

            listAchievementElement.innerHTML = output;
        }

        // Event listener untuk tab
        document.addEventListener('DOMContentLoaded', function () {
            // Tampilkan halaman login secara default
            showPage('login');

            // Event listener untuk tombol login
            document.getElementById('login-button').addEventListener('click', function () {
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                login(username, password);
            });

            // Event listener untuk tekan Enter di form login
            document.getElementById('password').addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    const username = document.getElementById('username').value;
                    const password = document.getElementById('password').value;
                    login(username, password);
                }
            });

            // Event listener untuk tab
            var tabLinks = document.querySelectorAll('.tab-link');

            tabLinks.forEach(function (tab) {
                tab.addEventListener('click', function () {
                    var targetPage = this.getAttribute('data-page');
                    showPage(targetPage);
                });
            });

            // Event listener untuk tombol kembali
            document.getElementById('quiz-back-button').addEventListener('click', function (e) {
                e.preventDefault();
                showPage('home');
            });

            document.getElementById('materi-back-button').addEventListener('click', function (e) {
                e.preventDefault();
                showPage('home');
            });

            document.getElementById('profil-back-button').addEventListener('click', function (e) {
                e.preventDefault();
                showPage('home');
            });

            document.getElementById('detail-subject-back-button').addEventListener('click', function (e) {
                e.preventDefault();
                showPage('materi');
            });

            document.getElementById('detail-materi-back-button').addEventListener('click', function (e) {
                e.preventDefault();
                showPage('materi');
            });

            document.getElementById('detail-quiz-back-button').addEventListener('click', function (e) {
                e.preventDefault();
                showPage('quiz');
            });

            // Event listener untuk mata pelajaran
            document.querySelectorAll('.subject-item').forEach(function (item) {
                item.addEventListener('click', function () {
                    const subjectId = this.dataset.subject;
                    showSubjectDetail(subjectId);
                });
            });

            // Event listener untuk kartu tingkat kesulitan quiz
            document.querySelectorAll('.difficulty-card').forEach(function (card) {
                card.addEventListener('click', function () {
                    const difficulty = this.dataset.difficulty;
                    startQuiz(difficulty);
                });
            });

            // Event listener untuk pilihan jawaban quiz
            document.querySelectorAll('.answer-option').forEach(function (option) {
                option.addEventListener('click', function () {
                    // Hapus seleksi dari semua opsi
                    document.querySelectorAll('.answer-option').forEach(function (opt) {
                        opt.classList.remove('selected');
                    });

                    // Tandai opsi yang dipilih
                    this.classList.add('selected');

                    // Simpan jawaban pengguna
                    userAnswers[currentQuestionIndex] = parseInt(this.dataset.answer);
                });
            });

            // Event listener untuk tombol navigasi quiz
            document.getElementById('prev-question').addEventListener('click', function () {
                if (currentQuestionIndex > 0) {
                    showQuestion(currentQuestionIndex - 1);
                }
            });

            document.getElementById('next-question').addEventListener('click', function () {
                if (currentQuestionIndex < quizData[currentQuizDifficulty].length - 1) {
                    showQuestion(currentQuestionIndex + 1);
                } else {
                    // Quiz selesai
                    showQuizResults();
                }
            });




            // Tombol logout di menu bawah
            document.getElementById('logout-button-menu').addEventListener('click', function () {
                document.getElementById('profil-page').classList.add('page-hidden');
                document.getElementById('login-page').classList.remove('page-hidden');
            });


        });
