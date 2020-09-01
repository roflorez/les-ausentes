
let miVideo = document.getElementById('mi_vid')

    document.getElementById('btn_reproducir').onclick = reproduccion;
    document.getElementById('btn_pausar').onclick = parar;

        function reproduccion(){
            miVideo.play()
        }

        function parar(){
            miVideo.pause()
        }