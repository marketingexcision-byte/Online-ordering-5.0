/* Publish by EComposer at 2024-06-18 01:13:26*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-vpvuhrvivw"]=  window.__ectimmers["ecom-vpvuhrvivw"] || {};
if(!this.$el)return;const e=this.$el,i=e.querySelector(".ecom-text_view-more-btn"),t=e.querySelector(".ecom-text_view-less-btn"),n=e.querySelector(".text-content.ecom-html");!n||(i&&i.addEventListener("click",()=>{n.classList.remove("ecom-text--is-mark"),n.style.maxHeight="",i.style.display="none",t.style.display=""}),t&&t.addEventListener("click",()=>{n.classList.add("ecom-text--is-mark"),n.style.maxHeight="var(--ecom-text-height)",t.style.display="none",i.style.display=""}))

                    });
                    
                        document.querySelectorAll('.ecom-vpvuhrvivw').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-vpvuhrvivw', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-nq7rji34duc').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-nq7rji34duc', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-36jvdb7jqm').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-36jvdb7jqm', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-g5bqc4o3rkd').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-g5bqc4o3rkd', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-u8u4b06qj6l"]=  window.__ectimmers["ecom-u8u4b06qj6l"] || {};
if(this.settings.link==="lightbox"&&this.settings.lightbox==="yes"&&window.EComModal&&this.$el){var e=this.$el.querySelector("[ecom-modal]");new window.EComModal(e,{cssClass:["ecom-container-lightbox-"+this.id]})}

                    });
                    
                        document.querySelectorAll('.ecom-u8u4b06qj6l').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-u8u4b06qj6l', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-8rl6c6viyuh').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-8rl6c6viyuh', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-pffc0i15xif"]=  window.__ectimmers["ecom-pffc0i15xif"] || {};
if(!this.settings||!this.$el)return;var e=this.$el.querySelector(".ecom-video_overlay-icon");e&&e.addEventListener("click",()=>{if(this.settings.source=="hosted"||this.settings.source=="uploaded"){let n=this.$el.querySelector(".ecom_video");n.autoplay=!0,n.load(),this.$el.querySelector(".ecom-video_overlay-icon").classList.remove("ecom-overlay"),this.$el.querySelector(".ecom-video-icon-play").style.display="none"}else{let n=this.$el.querySelector(".ecom_iframe"),s=n.getAttribute("src");s.includes("autoplay=0")?s=s.replace("autoplay=0","autoplay=1"):s=s+"&autoplay=1",n.setAttribute("src",s),this.$el.querySelector(".ecom-video_overlay-icon").classList.remove("ecom-overlay"),this.$el.querySelector(".ecom-video-icon-play").style.display="none"}}),this.$el.querySelectorAll("[data-ec-tracking-id]").forEach(function(n){n.dataset.ecTrackingId&&n.addEventListener("click",function(){window.Shopify.analytics&&Shopify.analytics.publish("ec_custom_events",{button_id:n.id,tracking_id:n.dataset.ecTrackingId})},{once:!0})});const i=this.$el.querySelector("[ecom-modal]");if(i&&this.settings.image_overlay&&this.settings.play_on_lightbox&&window.EComModal){var t=this.id;new window.EComModal(i,{cssClass:[t,"ecom-core","ecom-core-simulator"],onOpen:function(){var n=document.querySelector(".ecom-modal."+t);n&&n.querySelector(".ecom-modal-box__content").classList.add("ecom-element_video-iframe")}})}

                    });
                    
                        document.querySelectorAll('.ecom-pffc0i15xif').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-pffc0i15xif', settings: {"source":"youtube","image_overlay":false},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-bbnp3yhgkwd"]=  window.__ectimmers["ecom-bbnp3yhgkwd"] || {};
if(this.settings.layout==="slider"){let i=this.$el,t="bullets";if(this.settings.slider_pagination_style==="progress"&&(t="progressbar"),!i)return;let o=i.querySelector(".ecom-shopify__blog-container"),s=o&&o.dataset.optionSwiper;s=JSON.parse(s),s.pagination={el:i.querySelector(".ecom-swiper-pagination"),type:t,clickable:!0},s.navigation={nextEl:i.querySelector(".ecom-swiper-button-next"),prevEl:i.querySelector(".ecom-swiper-button-prev")},new window.EComSwiper(o,s)}if(this.settings.use_ajax&&this.isLive){const i=this.$el;if(!i)return;const t=i.querySelector(".ecom-shopify__blog-wrapper"),o=function(e){e.preventDefault();const a=this.dataset.get,n=this.closest(".ecom-sections[data-section-id]");if(!a||!n||!n.dataset.sectionId)return;const p=n.dataset.sectionId,_=`${a}&section_id=${p}`;c(_,n),t.scrollIntoView()};i.querySelectorAll(".ecom-pagination-item").forEach(e=>{e.addEventListener("click",o)});const c=function(e,a){const n=async function(p){return(await fetch(p,{method:"GET",cache:"no-cache",headers:{"Content-Type":"text/html"}})).text()};a.classList.add("ecom-doing-load-blog"),n(e).then(function(p){i.querySelectorAll(".ecom-shopify__blog--post").forEach(function(u){u.remove()});const d=document.createElement("div");d.innerHTML=p;const r=d.querySelector(".ecom-shopify__blog--posts");if(!r)return;const y=a.querySelector(".ecom-shopify__blog--posts"),$=a.querySelector(".ecom-pagination-navigation.ecom-collection__pagination-navigation");for(;r.firstChild;)y.appendChild(r.firstChild);r.parentNode.removeChild(r);const h=d.querySelector(".ecom-pagination-navigation.ecom-collection__pagination-navigation");h&&($.innerHTML=h.innerHTML,i.querySelectorAll(".ecom-pagination-item").forEach(v=>{v.addEventListener("click",o)}))}).finally(function(){a.classList.remove("ecom-doing-load-blog")})}}

                    });
                    
                        document.querySelectorAll('.ecom-bbnp3yhgkwd').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-bbnp3yhgkwd', settings: {"layout":"slider"},isLive: true});
                        });
                    

                })();
            
;try{
 
} catch(error){console.error(error);}