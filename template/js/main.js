/*/*---------------------------------------function shows the elements on the panel*/
document.getElementById("strip-ul").classList.add('show');
document.getElementById("strip_anchors").classList.add('show');

const a_recently = document.getElementById("a_recently");
const categories_strip = document.getElementById("categories-strip");

a_recently.classList.add('active-element');
categories_strip.classList.add('active-element');


const containers = document.querySelectorAll('.categories-list-item');
  
containers.forEach(f => f.addEventListener('mouseenter', function () {
    containers.forEach(e => {
        var ul = e.querySelector('ul');
        var div = e.querySelector('div');

        ul.classList.add('hidden');
        ul.classList.remove('show');

        div.classList.add('hidden');
        div.classList.remove('show');

        a_recently.classList.remove('active-element');
        categories_strip.classList.remove('active-element');
         
    })
    this.querySelector('ul').classList.add('show');
    this.querySelector('div').classList.add('show');
}))


/*---------------function add text element to stage from the add panel*/
function add_to_stage() {
    //const stage = document.getElementById("draggable");
    const stage = document.getElementsByClassName("editor-stage")[0];

    // Create an h1, and resizeble dots nodes:
    const node = document.createElement("h1");
    node.setAttribute("id", "myh1");
    node.setAttribute("class", "item");
    node.setAttribute("contentEditable", "true");
 
    //---------------create 3 dots on the h1 to make resizeble
    const ewr = document.createElement("div");
    ewr.setAttribute("class", "resizer ewr");

    const ns = document.createElement("div");
    ns.setAttribute("class", "resizer ns");

    const ewl = document.createElement("div");
    ewl.setAttribute("class", "resizer ewl"); 
      

    node.appendChild(ewr);
    node.appendChild(ns);
    node.appendChild(ewl); 

    //---------------Create a text node:
    const textnode = document.createTextNode("Heading1");

    //---------------Append the text node to the "h1" node:
    node.appendChild(textnode);
    
    //---------------Append the "h1" node to the stage:
    stage.appendChild(node);

    //---------------make the h1 draggble
        $(function() {
            $("#myh1").draggable(); 
        });


    //---------------double click on h1 remove the resizeble dots from the h1 on the stage
    $("#myh1").dblclick(function () { 
        $("#myh1").css('cursor', 'text');
        $(".ewr").css("display", "none"); 
        $(".ns").css("display", "none");
        $(".ewl").css("display", "none"); 
    });

   //---------------focus on h1, select the text to edit
    $("#myh1").focus(function () {
        var $this = $(this);
        $this.select(); 
        // Work around Chrome's little problem
        $this.mouseup(function () {
            // Prevent further mouseup intervention
            $this.unbind("mouseup");
            return false;
        });
    });
   
}
  
//---------------toggle the panel
$(document).ready(function () { 
    $("#add-item, #close-panel").click(function () {
        $("#leftbar-open").toggle("slide");  
    })
     
    $(".editor-stage").click(function () {
        $("#leftbar-open").hide("slide");
    });

    $('#add-item, #close-panel').click(function (event) {
        event.stopPropagation();
    });

     
    /*---------------display the tip after 10 seconds*/
    setTimeout(function () {
        $('.mission_tooltip').show(); 
    }, 10000);


    $("#tooltip-close").click(function () {
        $(".mission_tooltip").hide();
    })
    
     
     

     /*---------------hover on the anchors, style the submenu list item*/
    $("#recently").hover(
        function () {
            $("#a_recently").addClass("active-element");
        },
        function () {
            $("#a_recently").removeClass("active-element");
        }
    );


    $("#recently_text").hover(
        function () {
            $("#a_recently_text").addClass("active-element");
        },
        function () {
            $("#a_recently_text").removeClass("active-element");
        }
    );


    $("#classic").hover(
        function () {
            $("#a_classic").addClass("active-element");
        },
        function () {
            $("#a_classic").removeClass("active-element");
        }
    );



    $("#featured").hover(
        function () {
            $("#a_featured").addClass("active-element");
        },
        function () {
            $("#a_featured").removeClass("active-element");
        }
    );


    $("#about").hover(
        function () {
            $("#a_about").addClass("active-element");
        },
        function () {
            $("#a_about").removeClass("active-element");
        }
    );

    $("#services").hover(
        function () {
            $("#a_services").addClass("active-element");
        },
        function () {
            $("#a_services").removeClass("active-element");
        }
    );

    $("#contact").hover(
        function () {
            $("#a_contact").addClass("active-element");
        },
        function () {
            $("#a_contact").removeClass("active-element");
        }
    );

    $("#welcome").hover(
        function () {
            $("#a_welcome").addClass("active-element");
        },
        function () {
            $("#a_welcome").removeClass("active-element");
        }
    );

    $("#testimonals").hover(
        function () {
            $("#a_testimonals").addClass("active-element");
        },
        function () {
            $("#a_testimonals").removeClass("active-element");
        }
    );

    $("#team").hover(
        function () {
            $("#a_team").addClass("active-element");
        },
        function () {
            $("#a_team").removeClass("active-element");
        }
        );





    $("#themed_text").hover(
        function () {
            $("#a_themed_text").addClass("active-element");
        },
        function () {
            $("#a_themed_text").removeClass("active-element");
        }
    );


    $("#titles_anchors").hover(
        function () {
            $("#a_titles_anchors").addClass("active-element");
        },
        function () {
            $("#a_titles_anchors").removeClass("active-element");
        }
    );


    $("#paragraphs_anchors").hover(
        function () {
            $("#a_paragraphs_anchors").addClass("active-element");
        },
        function () {
            $("#a_paragraphs_anchors").removeClass("active-element");
        }
    );


    $("#my_uploads").hover(
        function () {
            $("#a_my_uploads").addClass("active-element");
        },
        function () {
            $("#a_my_uploads").removeClass("active-element");
        }
    );


    $("#image_collections").hover(
        function () {
            $("#a_image_collections").addClass("active-element");
        },
        function () {
            $("#a_image_collections").removeClass("active-element");
        }
    );


    $("#my_social").hover(
        function () {
            $("#a_my_social").addClass("active-element");
        },
        function () {
            $("#a_my_social").removeClass("active-element");
        }
    );


    
    

});



function resize() {
    const el = document.getElementsByClassName("item")[0];
    console.log(el);
    //const el = document.querySelector(".item");

    let isResizing = false;

    el.addEventListener("mousedown", mousedown);

    function mousedown(e) {
        /*window.addEventListener("mousemove", mousemove);*/
        window.addEventListener("mouseup", mouseup);

        let prevX = e.clientX;
        let prevY = e.clientY;


        function mouseup() {
           /* window.removeEventListener("mousemove", mousemove);*/
            window.removeEventListener("mouseup", mouseup);
        }
    }

    const resizers = document.querySelectorAll(".resizer");
    let currentResizer;

    for (let resizer of resizers) {
        resizer.addEventListener("mousedown", mousedown);

        function mousedown(e) {
            currentResizer = e.target;
            isResizing = true;

            let prevX = e.clientX;
            let prevY = e.clientY;

            window.addEventListener("mousemove", mousemove);
            window.addEventListener("mouseup", mouseup);

            function mousemove(e) {
                const rect = el.getBoundingClientRect();

                if (currentResizer.classList.contains("se")) {
                    el.style.width = rect.width - (prevX - e.clientX) + "px";
                    el.style.height = rect.height - (prevY - e.clientY) + "px";
                } else if (currentResizer.classList.contains("sw")) {
                    el.style.width = rect.width + (prevX - e.clientX) + "px";
                    el.style.height = rect.height - (prevY - e.clientY) + "px";
                    el.style.left = rect.left - (prevX - e.clientX) + "px";
                } else if (currentResizer.classList.contains("ne")) {
                    el.style.width = rect.width - (prevX - e.clientX) + "px";
                    el.style.height = rect.height + (prevY - e.clientY) + "px";
                    el.style.top = rect.top - (prevY - e.clientY) + "px";
                } else {
                    el.style.width = rect.width + (prevX - e.clientX) + "px";
                    el.style.height = rect.height + (prevY - e.clientY) + "px";
                    el.style.top = rect.top - (prevY - e.clientY) + "px";
                    el.style.left = rect.left - (prevX - e.clientX) + "px";
                }

                prevX = e.clientX;
                prevY = e.clientY;
            }

            function mouseup() {
                window.removeEventListener("mousemove", mousemove);
                window.removeEventListener("mouseup", mouseup);
                isResizing = false;
            }
        }
    }
}


