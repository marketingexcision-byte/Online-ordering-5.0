/* Publish by EComposer at 2024-06-30 22:55:57*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-k55etgnwbw"]=  window.__ectimmers["ecom-k55etgnwbw"] || {};
if(!this.$el)return;const e=this.$el,i=e.querySelector(".ecom-text_view-more-btn"),t=e.querySelector(".ecom-text_view-less-btn"),n=e.querySelector(".text-content.ecom-html");!n||(i&&i.addEventListener("click",()=>{n.classList.remove("ecom-text--is-mark"),n.style.maxHeight="",i.style.display="none",t.style.display=""}),t&&t.addEventListener("click",()=>{n.classList.add("ecom-text--is-mark"),n.style.maxHeight="var(--ecom-text-height)",t.style.display="none",i.style.display=""}))

                    });
                    
                        document.querySelectorAll('.ecom-k55etgnwbw').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-k55etgnwbw', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-gh6rr0z0kr6').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-gh6rr0z0kr6', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-uytzky7t07p').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-uytzky7t07p', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-l5u455l3ht').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-l5u455l3ht', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-pdd9u6wgbg7').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-pdd9u6wgbg7', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ixzthkhtadm').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ixzthkhtadm', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-zyfoycae09l"]=  window.__ectimmers["ecom-zyfoycae09l"] || {};
const e=this.$el;if(!e||!this.isLive)return;const i=e.querySelector(".element__featured--wrapper-list");if(i){let t={top:0,left:0,x:0,y:0};const n=function(a){const r=a.clientX-t.x;i.scrollLeft=t.left-r},s=function(){i.removeEventListener("mousemove",n),i.removeEventListener("mouseup",s),i.style.cursor="default",i.style.removeProperty("user-select")},o=function(a){i.style.cursor="grabbing",i.style.userSelect="none",t={left:i.scrollLeft,top:i.scrollTop,x:a.clientX,y:a.clientY},i.addEventListener("mousemove",n),i.addEventListener("mouseup",s)};i.addEventListener("mousedown",o),i.addEventListener("mouseleave",s)}

                    });
                    
                        document.querySelectorAll('.ecom-zyfoycae09l').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-zyfoycae09l', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-72ni8w7b2k7').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-72ni8w7b2k7', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-77clvgzatue"]=  window.__ectimmers["ecom-77clvgzatue"] || {};
if(!this.$el)return!1;const e=this.$el;this.settings.animation&&function(t){if(!e)return;const n=e.querySelector(".ecom__element--button");if(!n)return;let s=parseInt(t.settings.animation_loop_time)*1e3||6e3,o=1e3;window.__ectimmers["ecom-77clvgzatue"]["z76s7a6py"] = setInterval(function(){n.classList.add("animated"),setTimeout(function(){n.classList.remove("animated")},o)},s)}(this);var i=e.querySelector(".ecom__element--button");this.isLive&&i&&i.dataset.ecTrackingId&&i.addEventListener("click",function(t){if(window.Shopify.analytics){t.preventDefault();let n=document.createElement("div");document.body.appendChild(n),n.click(),Shopify.analytics.publish("ec_custom_events",{button_id:i.id,tracking_id:i.dataset.ecTrackingId}),i.cloneNode(!0).click()}},{once:!0}),this.isLive&&i&&i.dataset.eventTrackingFb&&i.addEventListener("click",function(t){window.fbq&&window.fbq("track",`${i.dataset.eventTrackingFb}`)},{once:!0})

                    });
                    
                        document.querySelectorAll('.ecom-77clvgzatue').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-77clvgzatue', settings: {"animation":false},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-fr6lb9xepr').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-fr6lb9xepr', settings: {"animation":false},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-8am3j2qz146"]=  window.__ectimmers["ecom-8am3j2qz146"] || {};
if(!this.settings||!this.$el)return;var e=this.$el.querySelector(".ecom-video_overlay-icon");e&&e.addEventListener("click",()=>{if(this.settings.source=="hosted"||this.settings.source=="uploaded"){let n=this.$el.querySelector(".ecom_video");n.autoplay=!0,n.load(),this.$el.querySelector(".ecom-video_overlay-icon").classList.remove("ecom-overlay"),this.$el.querySelector(".ecom-video-icon-play").style.display="none"}else{let n=this.$el.querySelector(".ecom_iframe"),s=n.getAttribute("src");s.includes("autoplay=0")?s=s.replace("autoplay=0","autoplay=1"):s=s+"&autoplay=1",n.setAttribute("src",s),this.$el.querySelector(".ecom-video_overlay-icon").classList.remove("ecom-overlay"),this.$el.querySelector(".ecom-video-icon-play").style.display="none"}}),this.$el.querySelectorAll("[data-ec-tracking-id]").forEach(function(n){n.dataset.ecTrackingId&&n.addEventListener("click",function(){window.Shopify.analytics&&Shopify.analytics.publish("ec_custom_events",{button_id:n.id,tracking_id:n.dataset.ecTrackingId})},{once:!0})});const i=this.$el.querySelector("[ecom-modal]");if(i&&this.settings.image_overlay&&this.settings.play_on_lightbox&&window.EComModal){var t=this.id;new window.EComModal(i,{cssClass:[t,"ecom-core","ecom-core-simulator"],onOpen:function(){var n=document.querySelector(".ecom-modal."+t);n&&n.querySelector(".ecom-modal-box__content").classList.add("ecom-element_video-iframe")}})}

                    });
                    
                        document.querySelectorAll('.ecom-8am3j2qz146').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-8am3j2qz146', settings: {"source":"youtube"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ip7v2503e5').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ip7v2503e5', settings: {"source":"youtube"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-4a8yvegcycf"]=  window.__ectimmers["ecom-4a8yvegcycf"] || {};
if(this.settings.link==="lightbox"&&this.settings.lightbox==="yes"&&window.EComModal&&this.$el){var e=this.$el.querySelector("[ecom-modal]");new window.EComModal(e,{cssClass:["ecom-container-lightbox-"+this.id]})}let i=this.$el;if(!i)return;function t(s){const o=s.getBoundingClientRect();return o.top>=0&&o.left>=0&&o.bottom-s.offsetHeight/2<=(window.innerHeight||document.documentElement.clientHeight)&&o.right<=(window.innerWidth||document.documentElement.clientWidth)}function n(){let s=i.querySelector(".ecom-element.ecom-base-image"),o=i.closest(".core__row--columns");s&&(t(s)?(s.classList.add("image-highlight"),o.setAttribute("style","z-index: unset")):(s.classList.remove("image-highlight"),o.setAttribute("style","z-index: 1")))}this.settings.highligh_on_viewport&&window.addEventListener("scroll",function(){n()})

                    });
                    
                        document.querySelectorAll('.ecom-4a8yvegcycf').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-4a8yvegcycf', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-mi7fkttollf').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-mi7fkttollf', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-dzw1n9ahu7n').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-dzw1n9ahu7n', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-uhase0ouhkr').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-uhase0ouhkr', settings: {"link":"none","lightbox":"no"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-hwtfbju68yr').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-hwtfbju68yr', settings: {"link":"none","lightbox":"no","highligh_on_viewport":false},isLive: true});
                        });
                    

                })();
            
;try{
 
} catch(error){console.error(error);}