
    (function ($) {
        function Option(options) {
            this.wrap = options.wrap;
            this.List = options.List;
            this.title = options.title;
            this.init = function () {
                this.createDom();
                this.initStyle();
                this.bindEvent();
            }
            }
        
        Option.prototype.createDom = function () {
                    var oul = $('<ul class ="options-wrapper"></ul>');
                    var tle = $('<p>'+this.title+'</p>');
                   this.List.forEach(function(item,index){
                    $('<li class="options-items"> <div class ="items"><div class ="ite"> <div class="done">✓</div><input type="type="radio" name ="" value =""></div></div><label for="">' + item + '</label></li>').appendTo(oul);
                   })
                   $(this.wrap).append(tle);
                   $(this.wrap).append(oul);
                }
        // 初始化样式
          Option.prototype.initStyle = function () {
                    $('p', this.wrap).css({
                        width: '100%',
                        fontSize: '18px'
                    });
        
                   $('input', this.wrap).css({
                        display:'none',
                    })
                }
          Option.prototype.bindEvent = function () {
                $('.options-items').click(function(){
                if($(this).parent().parent().hasClass('radio')){ 
                    $(this).parent().parent().find('.active').removeClass('active');
                    $(this).children('label').addClass('active').parent().find('.ite').addClass('active').children('.done').addClass('active');;
               }else{
                $(this).find('label').toggleClass('active');
                $(this).find('.ite').toggleClass('active')
                $(this).find('.done').toggleClass('active');
               }   
              });
              $('.options-items').dblclick(function(){
                $(this).parent().parent().find('.active').removeClass('active');
              })
          }
             
        $.fn.extend({
            opts: function(options) {
                options.wrap = this;
                var obj = new  Option(options);
                 console.log(obj.init)
                obj.init();
            }
        })
    } (jQuery))