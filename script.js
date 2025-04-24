document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const form = document.getElementById('form');
    const namaInput = document.getElementById('nama');
    const containerUcapan = document.getElementById('container-ucapan');
    const tauEnggak = document.getElementById('tau-gak');
    const tau = document.getElementById('tau');
    const enggak = document.getElementById('enggak');
    const lanjut = document.getElementById('lanjut');
    const containerKisah = document.getElementById('container-kisah');
    const kisahRight = document.getElementById('kisah-right');
    const kisahLeft = document.getElementById('kisah-left');
    const kisahRightEnd = document.getElementById('kisah-right-end');
    const kataKisah = document.getElementById('kata-kisah');
    
    containerKisah.style.display = 'none';
    kisahRight.style.display = 'none';
    kisahLeft.style.display = 'none'
    kisahRightEnd.style.display = 'none';

    startTypewriterLabel();
    playAnimationKenangan();

    function startTypewriterLabel() {
        const typewriter = new Typewriter('#ketik', {
            loop: false,
            delay: 75,
            cursor: "|",
        });
        typewriter.typeString('Ketik Nama Kamu').start();
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nama = namaInput.value;

        form.style.display = 'none';
        form.style.animation = 'fadeOut 1s ease-out';
    
        containerUcapan.style.display = 'flex';
        containerUcapan.style.flexDirection = 'column';
        containerUcapan.style.animation = 'fadeIn 1s ease-in';

        startTypewriterUcapan(nama);
        playAudio();
    });

    function startTypewriterUcapan(nama) {
        const typewriter = new Typewriter('#teks-ucapan', {
            loop: false,
            delay: 75,
            cursor: "|",
        });

        typewriter
            .pauseFor(1000)
            .typeString(`<span>Halo, ${nama}!</span>`)
            .pauseFor(1000)
            .typeString('<br><span>Tau gak kak sekarang bakal kaya gimana?😅 ohh iya miring kan hp yahh untuk liat background lebih jelas dan tidak kepotong</span>')
            .callFunction(() => {
                
                tauEnggak.style.display = 'flex';
                tauEnggak.style.animation = 'fadeIn 2s ease-in forwards';
                

                tau.addEventListener('click', function() {
                    tau.style.display = 'none';
                    enggak.style.display = 'none';
                    typewriter
                    .deleteAll(10)
                    .typeString('Ah gak seruu bangettt')
                    .pauseFor(1000)
                    .typeString('<br>tapi gak papa hehe,')
                    .pauseFor(500)
                    .typeString('<br>disini aku cuman mau ngucapin sesuatu aja kok 🙂')
                    .callFunction(() => {
                        const lihat = document.createElement('button');
                        const tidak = document.createElement('button');
                        lihat.classList.add('tau');
                        lihat.textContent = 'Lihat';
                        lihat.style.animation = 'fadeIn 2s ease-in forwards';
                        tauEnggak.appendChild(lihat);
                        
                        tidak.classList.add('enggak');
                        tidak.textContent = 'Tidak';
                        tidak.style.animation = 'fadeIn 2s ease-in forwards';
                        tauEnggak.appendChild(tidak);
                        
                        lihat.addEventListener('click', function() {
                            lihat.style.display = 'none';
                            tidak.style.display = 'none';
                            typewriter
                            .deleteAll(10)
                            .typeString('ga kerasa yahh kak sudah berpisah ')
                            .pauseFor(500)
                            .typeString('<br>padahal baru aja kamarin kenalan')
                            .callFunction(() => {
                                lanjut.style.display = 'block';
                                lanjut.style.animation = 'fadeIn 2s ease-in forwards';
                            })
                            .start();
                        });
                        
                        let i = 0;
                        const eitss = document.createElement('p'); // Buat elemen di luar event listener agar tidak dibuat ulang
                        
                        tidak.addEventListener('click', function() {
                            i++;
                        
                            if (i === 1) {
                                tidak.style.position = 'absolute';
                                tidak.style.left = '20px'; // Tambahkan 'px' ke nilai left
                            } else if (i === 2) {
                                tidak.style.transform = 'rotate(-90deg)'; // Gunakan transform untuk rotasi
                                eitss.textContent = 'eitsss';
                                eitss.style.position = 'absolute';
                                eitss.style.left = '80px';
                                eitss.style.color = 'white';
                                if (!tauEnggak.contains(eitss)) {
                                    tauEnggak.appendChild(eitss);
                                }
                            } else if (i === 3) {
                                if (tauEnggak.contains(eitss)) {
                                    eitss.remove();
                                }
                                
                                tidak.style.transform = 'rotate(45deg)';
                                tidak.textContent = 'Harus dilihat';
                            } else if (i === 4) {
                                tidak.style.position = 'static'; // Kembali ke posisi semula
                                tidak.style.left = ''; // Hapus nilai left
                                tidak.style.transform = 'rotate(0deg)'; // Hapus rotasi
                                tidak.textContent = 'Tidak';
                                i = 0;
                            }
                        });
                    })
                    .start();
                });

                enggak.addEventListener('click', function() {
                    tau.style.display = 'none';
                    enggak.style.display = 'none';
                    
                    typewriter
                    .deleteAll(10)
                    .typeString('Masa sih kak ga inget 😅')
                    .pauseFor(1000)
                    .typeString('<br>Yaudah gapapa,')
                    .pauseFor(500)
                    .typeString('biar aku jelasin ya😄')
                    .callFunction(() => {
                        const boleh = document.createElement('button');
                        boleh.classList.add('tau');
                        boleh.textContent = 'Boleh';
                        boleh.style.animation = 'fadeIn 2s ease-in forwards';
                        tauEnggak.appendChild(boleh);
                        
                        const cepet = document.createElement('button');
                        cepet.classList.add('enggak');
                        cepet.textContent = 'Cepet';
                        cepet.style.animation = 'fadeIn 2s ease-in forwards';
                        tauEnggak.appendChild(cepet);
                        
                        boleh.addEventListener('click', function() {
                            boleh.style.display = 'none';
                            cepet.style.display = 'none';
                            typewriter
                            .deleteAll(10)
                            .typeString('Jadi kita sudah tidak bekerja bareng lagi 🥲')
                            .pauseFor(500)
                            .typeString('<br>Nah aku mau ngomong sesuatu aja sih sama kakak😄')
                            .pauseFor(500)
                            .typeString('<br><br>Lihat yaaa😁')
                            .callFunction(() => {
                                const lihat = document.createElement('button');
                                const tidak = document.createElement('button');
                                lihat.classList.add('tau');
                                lihat.textContent = 'Iya';
                                lihat.style.animation = 'fadeIn 2s ease-in forwards';
                                tauEnggak.appendChild(lihat);
                                
                                tidak.classList.add('enggak');
                                tidak.textContent = 'Tidak';
                                tidak.style.animation = 'fadeIn 2s ease-in forwards';
                                tauEnggak.appendChild(tidak);
                                
                                lihat.addEventListener('click', function() {
                                    lihat.style.display = 'none';
                                    tidak.style.display = 'none';
                                    typewriter
                                    .deleteAll(10)
                                    .typeString('ga kerasa yahh kak sudah berpisah')
                                    .pauseFor(500)
                                    .typeString('<br>pdahal baru aja kemarin kenalan')
                                    .callFunction(() => {
                                        lanjut.style.display = 'block';
                                        lanjut.style.animation = 'fadeIn 2s ease-in forwards';
                                    })
                                    .start();
                                });
                                
                                let i = 0;
                                const eitss = document.createElement('p'); // Buat elemen di luar event listener agar tidak dibuat ulang
                                
                                tidak.addEventListener('click', function() {
                                    i++;
                                
                                    if (i === 1) {
                                        tidak.style.position = 'absolute';
                                        tidak.style.left = '20px'; // Tambahkan 'px' ke nilai left
                                    } else if (i === 2) {
                                        tidak.style.transform = 'rotate(-90deg)'; // Gunakan transform untuk rotasi
                                        eitss.textContent = 'eitsss';
                                        eitss.style.position = 'absolute';
                                        eitss.style.left = '80px';
                                        eitss.style.color = 'white';
                                        if (!tauEnggak.contains(eitss)) {
                                            tauEnggak.appendChild(eitss);
                                        }
                                    } else if (i === 3) {
                                        if (tauEnggak.contains(eitss)) {
                                            eitss.remove();
                                        }
                                        
                                        tidak.style.transform = 'rotate(45deg)';
                                        tidak.textContent = 'Harus dilihat';
                                    } else if (i === 4) {
                                        tidak.style.position = 'static'; // Kembali ke posisi semula
                                        tidak.style.left = ''; // Hapus nilai left
                                        tidak.style.transform = 'rotate(0deg)'; // Hapus rotasi
                                        tidak.textContent = 'Tidak';
                                        i = 0;
                                    }
                                });
                            })
                            .start();
                        });
                        
                        cepet.addEventListener('click', function() {
                            boleh.style.display = 'none';
                            cepet.style.display = 'none';
                            typewriter
                            .deleteAll(10)
                            .typeString('Iya iya,sabar dong')
                            .pauseFor(500)
                            .deleteAll(10)
                            .typeString('Jadi kita itu sudah lengser🥲')
                            .pauseFor(500)
                            .typeString('<br>Nah aku mau ngomong sesuatu aja sih sama kakak😄')
                            .pauseFor(500)
                            .typeString('<br><br>Lihat yaaa😁')
                            .callFunction(() => {
                                const lihat = document.createElement('button');
                                const tidak = document.createElement('button');
                                lihat.classList.add('tau');
                                lihat.textContent = 'Iya';
                                lihat.style.animation = 'fadeIn 2s ease-in forwards';
                                tauEnggak.appendChild(lihat);
                                
                                tidak.classList.add('enggak');
                                tidak.textContent = 'Tidak';
                                tidak.style.animation = 'fadeIn 2s ease-in forwards';
                                tauEnggak.appendChild(tidak);
                                
                                lihat.addEventListener('click', function() {
                                    lihat.style.display = 'none';
                                    tidak.style.display = 'none';
                                    typewriter
                                    .deleteAll(10)
                                    .typeString('ga kerasa yahh kak sudah berpisah')
                                    .pauseFor(500)
                                    .typeString('<br>padalah baru aja kemarin kenalan')
                                    .callFunction(() => {
                                        lanjut.style.display = 'block';
                                        lanjut.style.animation = 'fadeIn 2s ease-in forwards';
                                    })
                                    .start();
                                });
                                
                                let i = 0;
                                const eitss = document.createElement('p'); // Buat elemen di luar event listener agar tidak dibuat ulang
                                
                                tidak.addEventListener('click', function() {
                                    i++;
                                
                                    if (i === 1) {
                                        tidak.style.position = 'absolute';
                                        tidak.style.left = '20px'; // Tambahkan 'px' ke nilai left
                                    } else if (i === 2) {
                                        tidak.style.transform = 'rotate(-90deg)'; // Gunakan transform untuk rotasi
                                        eitss.textContent = 'eitsss';
                                        eitss.style.position = 'absolute';
                                        eitss.style.left = '80px';
                                        eitss.style.color = 'white';
                                        if (!tauEnggak.contains(eitss)) {
                                            tauEnggak.appendChild(eitss);
                                        }
                                    } else if (i === 3) {
                                        if (tauEnggak.contains(eitss)) {
                                            eitss.remove();
                                        }
                                        
                                        tidak.style.transform = 'rotate(45deg)';
                                        tidak.textContent = 'Harus dilihat';
                                    } else if (i === 4) {
                                        tidak.style.position = 'static'; // Kembali ke posisi semula
                                        tidak.style.left = ''; // Hapus nilai left
                                        tidak.style.transform = 'rotate(0deg)'; // Hapus rotasi
                                        tidak.textContent = 'Tidak';
                                        i = 0;
                                    }
                                });
                            })
                            .start();
                        });
                    })
                    .start();
                });
                
                lanjut.addEventListener('click', function() {
                    lanjut.style.display = 'none';
                    typewriter
                    .deleteAll(10)
                    .typeString('eummm...')
                    .pauseFor(500)
                    .typeString('<br>Untuk Kak Tresna, Ketua Divisi 5 OSIS yang Hebat,')
                    .callFunction(() => {
                        const lanjut1 = document.createElement('button');
                        lanjut1.classList.add('lanjut');
                        lanjut1.textContent = 'Lanjut';
                        lanjut1.style.display = 'block';
                        tauEnggak.appendChild(lanjut1);
                        
                        lanjut1.addEventListener('click', function() {
                            lanjut1.style.display = 'none';
                            typewriter
                            .deleteAll(10)
                            .typeString('Terima kasih sudah menjadi sosok yang luar biasa bagi kami semua')
                            .pauseFor(500)
                            .typeString('<br>Terima kasih sudah sabar membimbing kami di Divisi 5, divisi yang penuh warna,')
                            .callFunction(() => {
                                const lanjut2 = document.createElement('button');
                                lanjut2.classList.add('lanjut');
                                lanjut2.textContent = 'Lanjut';
                                lanjut2.style.display = 'block';
                                tauEnggak.appendChild(lanjut2);
                                
                                lanjut2.addEventListener('click', function() {
                                    lanjut2.style.display = 'none';
                                    typewriter
                                    .deleteAll(10)
                                    .typeString('ide-ide kreatif, dan pastinya... poster dan feeds yang tak pernah absen mencuri perhatian!')
                                    .pauseFor(500)
                                    .typeString('<br>Di bawah arahan Kak Tresna, kami belajar banyak hal, bukan cuma soal desain dan konten-konten lainnya,')
                                    .callFunction(() => {
                                        const lanjut3 = document.createElement('button');
                                        lanjut3.classList.add('lanjut');
                                        lanjut3.textContent = 'Lanjut';
                                        lanjut3.style.display = 'block';
                                        tauEnggak.appendChild(lanjut3);
                                        
                                        lanjut3.addEventListener('click', function() {
                                            lanjut3.style.display = 'none';
                                            typewriter
                                            .deleteAll(10)
                                            .typeString('tapi juga tentang kerja sama, menghargai pendapat, dan tanggung jawab.')
                                            .pauseFor(500)
                                            .typeString('<br>Kakak selalu bisa jadi tempat bertanya, jadi penengah saat bingung, dan jadi penyemangat di kala lelah.')
                                            .callFunction(() => {
                                                const lanjut4 = document.createElement('button');
                                                lanjut4.classList.add('lanjut');
                                                lanjut4.textContent = 'Lanjut';
                                                lanjut4.style.display = 'block';
                                                tauEnggak.appendChild(lanjut4);
                                                
                                                lanjut4.addEventListener('click', function() {
                                                    lanjut4.style.display = 'none';
                                                    typewriter
                                                    .deleteAll(10)
                                                    .typeString('Perpisahan ini memang nggak mudah, tapi kenangan bersama Kakak akan selalu jadi bagian paling berharga dari perjalanan kami di OSIS.')
                                                    .pauseFor(500)
                                                    .callFunction(() => {
                                                        const lanjut5 = document.createElement('button');
                                                        lanjut5.classList.add('lanjut');
                                                        lanjut5.textContent = 'Lanjut';
                                                        lanjut5.style.display = 'block';
                                                        tauEnggak.appendChild(lanjut5);
                                                        
                                                        lanjut5.addEventListener('click', function() {
                                                            lanjut5.style.display = 'none';
                                                            typewriter
                                                            .deleteAll(10)
                                                            .typeString('Semoga ke depannya, Kakak bisa terus bersinar di mana pun berada. Jangan lupa kami, tim kecil penuh semangat dari Divisi 5!')
                                                            .pauseFor(500)
                                                            .callFunction(() => {
                                                                const lanjut6 = document.createElement('button');
                                                                lanjut6.classList.add('lanjut');
                                                                lanjut6.textContent = 'Lanjut';
                                                                lanjut6.style.display = 'block';
                                                                tauEnggak.appendChild(lanjut6);
                                                                
                                                                lanjut6.addEventListener('click', function() {
                                                                    lanjut6.style.display = 'none';
                                                                    typewriter
                                                                    .deleteAll(10)
                                                                    .typeString('Terima kasih atas semua dedikasi dan bimbingannya, Kak.')
                                                                    .pauseFor(500)
                                                                    .callFunction(() => {
                                                                        const lanjut7 = document.createElement('button');
                                                                        lanjut7.classList.add('lanjut');
                                                                        lanjut7.textContent = 'Lanjut';
                                                                        lanjut7.style.display = 'block';
                                                                        tauEnggak.appendChild(lanjut7);
                                                                        
                                                                        lanjut7.addEventListener('click', function() {
                                                                            lanjut7.style.display = 'none';
                                                                            typewriter
                                                                            .deleteAll(10)
                                                                            .typeString('Semoga segala kebaikan Kakak dibalas berlipat oleh-Nya.')
                                                                            .pauseFor(1000)
                                                                            .typeString('<br> Sampai jumpa di lain kesempatan 💙')
                                                                            .pauseFor(1000)
                                                                            .typeString('Dengan penuh rasa hormat dan terima kasih,')
                                                                            .pauseFor(1000)
                                                                            .typeString('<br><brAnggota osis divisi 5 yang sangat menyayangi kakak')
                                                                            .callFunction(() => {
                                                                                const lanjut8 = document.createElement('button');
                                                                                lanjut8.classList.add('lanjut');
                                                                                lanjut8.textContent = 'Lanjut';
                                                                                lanjut8.style.display = 'block';
                                                                                tauEnggak.appendChild(lanjut8);
                                                                                
                                                                                lanjut8.addEventListener('click', function() {
                                                                                    containerUcapan.style.animation = 'fadeOut 3s ease-out forwards';
                                                                                    containerUcapan.addEventListener('animationend', function() {
                                                                                        containerUcapan.display = 'none';
                                                                                        container.style.display = 'none';
                                                                                        containerKisah.style.display = 'flex';
                                                                                    });
                                                                                });
                                                                            })
                                                                            .start();
                                                                        });
                                                                    })
                                                                    .start();
                                                                });
                                                            })
                                                            .start();
                                                        });
                                                    })
                                                    .start();
                                                });
                                            })
                                            .start();
                                        });
                                    })
                                    .start();
                                });
                            })
                            .start();
                        });
                    })
                    .start();
                });
            })
            .start();
    }
    
    function playAnimationKenangan() {
        kisahRight.style.display = 'flex';
        kisahRight.style.animation = 'fadeIn 2s ease-in forwards';
        kisahRight.addEventListener('animationend', function() {
            kisahLeft.style.display = 'flex';
            kisahLeft.style.animation = 'fadeIn 2s ease-in forwards';
            
            kisahLeft.addEventListener('animationend', function() {
                kataKisah.style.display = 'flex';
                kisahRightEnd.style.display = 'flex';
                kisahRightEnd.style.animation = 'fadeIn 2s ease-in forwards';
                
                kisahRightEnd.addEventListener('animationend', function() {
                    const typewriter = new Typewriter(kataKisah, {
                    loop: false,
                    delay: 75,
                    cursor: '',
                    });
                    
                    typewriter
                    .typeString('<span>Kenangan Kita<span>')
                    .pauseFor(500)
                    .typeString('<br><p>Saat Sekolah')
                    .pauseFor(1000)
                    .typeString('<br><div>Terimakasih kawan,semoga kita bisa meraih tujuan besar kita masing masing')
                    .callFunction(() => {
                        const waButton = document.querySelector('.whatsapp-button');
                        waButton.style.display = 'inline-flex';
                        waButton.style.animation = 'fadeIn 2s ease-in forwards';
                    })
                    .start();
                });
                
            });
        });
    }
    
    function playAudio() {
        const audio = document.getElementById('instrumen');
        audio.volume = 0; // Mengatur volume awal ke 0
        audio.play(); // Memutar audio
    
        // Mengatur efek fade in
        let volume = 0;
        const fadeInInterval = setInterval(function() {
            if (volume < 0.5) { // Volume target adalah 50%
                volume = Math.min(volume + 0.01, 0.5);
                audio.volume = volume;
            } else {
                clearInterval(fadeInInterval);
            }
        }, 100); // Menyesuaikan kecepatan fade in dalam milidetik (100ms = 0.1 detik)
    }
});