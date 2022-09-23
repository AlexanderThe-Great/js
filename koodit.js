        // alert("Hoi Maailma!");
        console.log("Tämä on lokitusta!");

        function teejotain(){
                alert("Tein jotain");
        }

        // Lisätään kuuntelija
        var nappi = document.getElementsByTagName('button')[0];
        nappi.addEventListener('click', teejotain);