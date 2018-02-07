<script>
        //functions defined in init
        function comenzar(event) {
            console.log("Comenzando");
            //transfiriendo datos
            event.dataTransfer.setData("text", event.target.id);
        }

        function sobrevolar(event) {
            console.log("Sobrevolando");
            //evitando problemas al soltar
            event.preventDefault()
        }


        function soltar(event) {
            console.log("soltando");
            //evitando problemas al soltar
            event.preventDefault()
            //cogiendo datos
            var data = event.dataTransfer.getData("text");
            var midiv = document.getElementById(event.target.id);
            console.log(midiv);
        }



        //function init
        function init() {
            console.log("Dom cargado");
            var o1 = document.getElementById("item-origen-1");
            var o2 = document.getElementById("item-origen-2");
            var o3 = document.getElementById("item-origen-3");
            var d1 = document.getElementById("item-destino-1");
            var d2 = document.getElementById("item-destino-2");
            var d3 = document.getElementById("item-destino-3");
            o1.addEventListener("dragstart", comenzar);
            o1.addEventListener("dragover", sobrevolar);
            o1.addEventListener("drop", soltar);
        }
        document.addEventListener("DOMContentLoaded", init);
    </script>
</body>

</html>
