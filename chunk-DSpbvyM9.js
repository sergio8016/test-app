import{$ as Te$1,$t as iE,At as bo,Bt as ec,E as Jh,G as Qn,K as Rf,Kt as gL,M as Le$1,N as Lf,Nt as cL,O as KI,P as Lg,Pn as rp,Q as TI,R as Mf,Rt as dL,Sn as ni,T as II,Tn as oI,U as Qf,Un as tI,V as Pf,W as Qm,Xn as we$1,Y as Sf,Z as Sv,Zt as hL,_n as mg,an as jf,c as Av,cn as kf,ct as Vv,dn as lL,en as iI,gn as mE,hn as lr,k as Kl,kn as q,l as BI,m as DI,nt as Uf,ot as VI,p as D,rn as il,rt as Ul,tn as ia,tr as xo,un as kv,w as Hf,xt as aL,y as G,yn as nI,yt as _I,z as N}from"./chunk-B6hVtR7X.js";import{C as oe,D as xt$1,E as xn,F as Ci,H as mi,L as It,O as zn,P as Bt,S as ni$1,T as xe$1,_ as _n,a as Dt$1,b as kn,c as In,d as N$1,f as Nn,g as Ui,h as Ri,i as Dn,m as Pn,n as B,o as Fn,p as P,r as Cn,t as $n,u as Mn,v as ge,w as ri,x as kt,y as gr}from"./main-CXOTUDET.js";function W(...o){let s=[];for(let t=0;t<o.length;t++){let e=o[t];if(!e)continue;let n=typeof e;if(n===`string`||n===`number`)s.push(e);else if(n===`object`){let i=Array.isArray(e)?[W(...e)]:Object.entries(e).map(([r,a])=>a?r:void 0);s=i.length?s.concat(i.filter(r=>!!r)):s}}return s.join(` `).trim()}var Ie=Object.defineProperty;var re=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty;var Pe=Object.prototype.propertyIsEnumerable;var se=(o,s,t)=>s in o?Ie(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t;var ae=(o,s)=>{for(var t in s||(s={}))Be.call(s,t)&&se(o,t,s[t]);if(re)for(var t of re(s))Pe.call(s,t)&&se(o,t,s[t]);return o};function de(...o){let s=[];for(let t=0;t<o.length;t++){let e=o[t];if(!e)continue;let n=typeof e;if(n===`string`||n===`number`)s.push(e);else if(n===`object`){let i=Array.isArray(e)?[de(...e)]:Object.entries(e).map(([r,a])=>a?r:void 0);s=i.length?s.concat(i.filter(r=>!!r)):s}}return s.join(` `).trim()}function Ee(o){return typeof o==`function`&&`call`in o&&`apply`in o}function Fe({skipUndefined:o=!1},...s){return s?.reduce((t,e={})=>{for(let n in e){let i=e[n];if(!(o&&i===void 0))if(n===`style`)t.style=ae(ae({},t.style),e.style);else if(n===`class`||n===`className`)t[n]=de(t[n],e[n]);else if(Ee(i)){let r=t[n];t[n]=r?(...a)=>{r(...a),i(...a)}:i}else t[n]=i}return t},{})}function Dt(...o){return Fe({skipUndefined:!1},...o)}var xt={};function le(o=`pui_id_`){return Object.hasOwn(xt,o)||(xt[o]=0),xt[o]++,`${o}${xt[o]}`}var ce=(()=>{class o extends ri{name=`common`;static ɵfac=(()=>{let t;return function(n){return(t||(t=Lg(o)))(n||o)}})();static ɵprov=we$1({token:o,factory:o.ɵfac,providedIn:`root`})}return o})();var X=new N(`PARENT_INSTANCE`);var F=(()=>{class o{document=D(Qn);platformId=D(Jh);el=D(lr);injector=D(Le$1);cd=D(dL);renderer=D(ia);config=D(Cn);$parentInstance=D(X,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=D(ce);baseStyle=D(ri);scopedStyleEl;parent=this.$params.parent;cn=W;_themeScopedListener;themeChangeListenerMap=new Map;dt=cL();unstyled=cL();pt=cL();ptOptions=cL();$attrSelector=le(`pc`);get $name(){return this.componentName||`UnknownComponent`}get $hostName(){let t=this.hostName;return xo(t)?t():t}get $el(){return this.el?.nativeElement}directivePT=bo(void 0);directiveUnstyled=bo(void 0);$unstyled=mE(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=mE(()=>B(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,t=>B(t,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,t=>this._getOptionValue(t,this.$hostName||this.$name,this.$params)||B(t,this.$params))}_$styleCache;get $style(){return this._$styleCache||(this._$styleCache=G(G({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)),this._$styleCache}get $styleOptions(){return{nonce:this.config?.csp().nonce}}_$paramsCache;get $params(){if(!this._$paramsCache){let t=this._getHostInstance(this)||this.$parentInstance;this._$paramsCache={instance:this,parent:{instance:t}}}return this._$paramsCache}onInit(){}onChanges(t){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){this._shareStylesWithShadowRoot(),Kl(t=>{this.document&&!Ci(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener(`_themeScopedListener`,this._themeScopedListener)):this._unloadScopedThemeStyles()),t(()=>{this._offThemeChangeListener(`_themeScopedListener`)})}),Kl(t=>{this.document&&!Ci(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener(`_loadCoreStyles`,this._loadCoreStyles))),t(()=>{this._offThemeChangeListener(`_loadCoreStyles`)})}),this._hook(`onBeforeInit`)}ngOnInit(){this._$paramsCache=void 0,this._$styleCache=void 0,this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook(`onInit`)}ngOnChanges(t){this.onChanges(t),this._hook(`onChanges`,t)}ngDoCheck(){this.onDoCheck(),this._hook(`onDoCheck`)}ngAfterContentInit(){this.onAfterContentInit(),this._hook(`onAfterContentInit`)}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook(`onAfterContentChecked`)}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,``),this.config?.verified()===!1&&Ri(),this.onAfterViewInit(),this._hook(`onAfterViewInit`)}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook(`onAfterViewChecked`)}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook(`onDestroy`)}_mergeProps(t,...e){return kt(t)?t(...e):Dt(...e)}_getHostInstance(t){return t?this.$hostName?this.$name===this.$hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0}_getPropValue(t){return this[t]||this._getHostInstance(this)?.[t]}_getOptionValue(t,e=``,n={}){return Dt$1(t,e,n)}_hook(t,...e){if(this.$hostName||!this.pt()&&!this.directivePT()&&!this.config?.pt())return;let n=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${t}`),i=this._useDefaultPT(this._getOptionValue,`hooks.${t}`);n?.(...e),i?.(...e)}_load(){gr.isStyleNameLoaded(`base`)||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),gr.setLoadedStyleName(`base`)),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener(`_load`,()=>this._load())}_shareStylesWithShadowRoot(){if(Ci(this.platformId))return;let t=this.$el?.getRootNode?.();typeof ShadowRoot>`u`||!(t instanceof ShadowRoot)||D(Te$1).onDestroy(D(ni$1).addShadowRoot(t))}_loadGlobalStyles(){let t=this._useGlobalPT(this._getOptionValue,`global.css`,this.$params);P(t)&&this.baseStyle.load(t,G({name:`global`},this.$styleOptions))}_loadCoreStyles(){!gr.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),gr.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()===`none`)){if(!N$1.isStyleNameLoaded(`common`)){let{primitive:t,semantic:e,global:n,style:i}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,G({name:`primitive-variables`,variables:!0},this.$styleOptions)),this.baseStyle.load(e?.css,G({name:`semantic-variables`,variables:!0},this.$styleOptions)),this.baseStyle.load(n?.css,G({name:`global-variables`,variables:!0},this.$styleOptions)),this.baseStyle.loadBaseStyle(G({name:`global-style`},this.$styleOptions),i),N$1.setLoadedStyleName(`common`)}if(!N$1.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:t,style:e}=this.$style?.getComponentTheme?.()||{};this.$style?.load(t,G({name:`${this.$style?.name}-variables`,variables:!0},this.$styleOptions)),this.$style?.loadStyle(G({name:`${this.$style?.name}-style`},this.$styleOptions),e),N$1.setLoadedStyleName(this.$style?.name)}if(!N$1.isStyleNameLoaded(`layer-order`)){let t=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,G({name:`layer-order`,first:!0},this.$styleOptions)),N$1.setLoadedStyleName(`layer-order`)}}}_loadScopedThemeStyles(t){this.config?.theme()?.options?.cssVariables===!1&&this.$style?.name&&N$1.addScopedToken({[this.$style.name]:t})&&(N$1.deleteLoadedStyleName(this.$style.name),this._loadThemeStyles());let{css:e}=this.$style?.getPresetTheme?.(t,`[${this.$attrSelector}]`)||{},n=this.$style?.load(e,G({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.baseStyle.useStyle.remove(`${this.$attrSelector}-${this.$style?.name}`)}_themeChangeListener(t,e=()=>{}){this._offThemeChangeListener(t),gr.clearLoadedStyleNames();let n=e.bind(this);this.themeChangeListenerMap.set(t,n),oe.on(`theme:change`,n)}_removeThemeListeners(){this._offThemeChangeListener(`_themeScopedListener`),this._offThemeChangeListener(`_loadCoreStyles`),this._offThemeChangeListener(`_load`)}_offThemeChangeListener(t){this.themeChangeListenerMap.has(t)&&(oe.off(`theme:change`,this.themeChangeListenerMap.get(t)),this.themeChangeListenerMap.delete(t))}_getPTValue(t={},e=``,n={},i=!0){let r=/./g.test(e)&&!!n[e.split(`.`)[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue(`ptOptions`)?.()||this.config?.ptOptions?.()||{},g=i?r?this._useGlobalPT(this._getPTClassValue,e,n):this._useDefaultPT(this._getPTClassValue,e,n):void 0,u=r?void 0:this._usePT(this._getPT(t,this.$hostName||this.$name),this._getPTClassValue,e,q(G({},n),{global:g||{}})),h=this._getPTDatasets(e);return a||!a&&u?l?this._mergeProps(l,g,u,h):G(G(G({},g),u),h):G(G({},u),h)}_getPTDatasets(t=``){let e=`data-pc-`,n=t===`root`&&P(this.$pt()?.[`data-pc-section`]);return t!==`transition`&&q(G({},t===`root`&&q(G({[`${e}name`]:xt$1(n?this.$pt()?.[`data-pc-section`]:this.$name)},n&&{[`${e}extend`]:xt$1(this.$name)}),{[`${this.$attrSelector}`]:``})),{[`${e}section`]:xt$1(t.includes(`.`)?t.split(`.`).at(-1)??``:t)})}_getPTClassValue(t,e,n){let i=this._getOptionValue(t,e,n);return ge(i)||Ui(i)?{class:i}:i}_getPT(t,e=``,n){let i=(r,a=!1)=>{let l=n?n(r):r,g=xt$1(e),u=xt$1(this.$hostName||this.$name);return(a?g!==u?l?.[g]:void 0:l?.[g])??l};return t!=null&&Object.prototype.hasOwnProperty.call(t,`_usept`)?{_usept:t._usept,originalValue:i(t.originalValue),value:i(t.value)}:i(t,!0)}_usePT(t,e,n,i){let r=a=>e?.call(this,a,n,i);if(t!=null&&Object.prototype.hasOwnProperty.call(t,`_usept`)){let{mergeSections:a=!0,mergeProps:l=!1}=t._usept||this.config?.ptOptions()||{},g=r(t.originalValue),u=r(t.value);return g===void 0&&u===void 0?void 0:ge(u)?u:ge(g)?g:a||!a&&u?l?this._mergeProps(l,g,u):G(G({},g),u):u}return r(t)}_useGlobalPT(t,e,n){return this._usePT(this.$globalPT,t,e,n)}_useDefaultPT(t,e,n){return this._usePT(this.$defaultPT,t,e,n)}ptm(t=``,e={}){return this._getPTValue(this.$pt(),t,G(G({},this.$params),e))}ptms(t,e={}){return t.reduce((n,i)=>(n=Dt(n,this.ptm(i,e))||{},n),{})}ptmo(t={},e=``,n={}){return this._getPTValue(t,e,G({instance:this},n),!1)}cx(t,e={}){return this.$unstyled()?void 0:W(this._getOptionValue(this.$style.classes,t,G(G({},this.$params),e)))}sx(t=``,e=!0,n={}){if(e){let i=this._getOptionValue(this.$style.inlineStyles,t,G(G({},this.$params),n));return G(G({},this._getOptionValue(this.baseComponentStyle.inlineStyles,t,G(G({},this.$params),n))),i)}}translate(t,e){let n=this.config.getTranslation(t);return e?n?.[e]:n}static ɵfac=function(e){return new(e||o)};static ɵdir=kv({type:o,inputs:{dt:[1,`dt`],unstyled:[1,`unstyled`],pt:[1,`pt`],ptOptions:[1,`ptOptions`]},features:[iE([ce,ri]),mg]})}return o})();var k=(()=>{class o{pBind=cL(void 0);_attrs=bo(void 0);attrs=mE(()=>this._attrs()||this.pBind());styles=mE(()=>this.attrs()?.style);classes=mE(()=>W(this.attrs()?.class));listeners=[];el=D(lr);renderer=D(ia);constructor(){Kl(()=>{let t=this.attrs()||{},e=Object.fromEntries(Object.entries(t).filter(([n])=>n!==`style`&&n!==`class`));for(let[n,i]of Object.entries(e))if(n.startsWith(`on`)&&typeof i==`function`){let r=n.slice(2).toLowerCase();if(!this.listeners.some(a=>a.eventName===r)){let a=this.renderer.listen(this.el.nativeElement,r,i);this.listeners.push({eventName:r,unlisten:a})}}else i==null?this.renderer.removeAttribute(this.el.nativeElement,n):(this.renderer.setAttribute(this.el.nativeElement,n,i.toString()),n in this.el.nativeElement&&(this.el.nativeElement[n]=i))})}ngOnDestroy(){this.clearListeners()}setAttrs(t){_n(this._attrs(),t)||this._attrs.set(t)}clearListeners(){this.listeners.forEach(({unlisten:t})=>t()),this.listeners=[]}static ɵfac=function(e){return new(e||o)};static ɵdir=kv({type:o,selectors:[[``,`pBind`,``]],hostVars:4,hostBindings:function(e,n){e&2&&(VI(n.styles()),BI(n.classes()))},inputs:{pBind:[1,`pBind`]}})}return o})();var Ln=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=Av({type:o});static ɵinj=il({})}return o})();var Oe=[`*`];var Le={root:`p-fluid`};var ue=(()=>{class o extends ri{name=`fluid`;classes=Le;static ɵfac=(()=>{let t;return function(n){return(t||(t=Lg(o)))(n||o)}})();static ɵprov=we$1({token:o,factory:o.ɵfac})}return o})();var pe=new N(`FLUID_INSTANCE`);var be=(()=>{class o extends F{componentName=`Fluid`;$pcFluid=D(pe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(k,{self:!0});_componentStyle=D(ue);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=(()=>{let t;return function(n){return(t||(t=Lg(o)))(n||o)}})();static ɵcmp=Sv({type:o,selectors:[[`p-fluid`]],hostVars:2,hostBindings:function(e,n){e&2&&BI(n.cx(`root`))},features:[iE([ue,{provide:pe,useExisting:o},{provide:X,useExisting:o}]),Vv([k]),Mf],ngContentSelectors:Oe,decls:1,vars:0,template:function(e,n){e&1&&(DI(),TI(0))},dependencies:[Bt],encapsulation:2})}return o})();var Ae=`
    
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }


    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var ze={root:`p-ink`};var he=(()=>{class o extends ri{name=`ripple`;style=Ae;classes=ze;static ɵfac=(()=>{let t;return function(n){return(t||(t=Lg(o)))(n||o)}})();static ɵprov=we$1({token:o,factory:o.ɵfac})}return o})();var fe=(()=>{class o extends F{componentName=`Ripple`;_componentStyle=D(he);animationListener;mouseDownListener;timeout;constructor(){super(),Kl(()=>{mi(this.platformId)&&(this.config.ripple()?(this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,`mousedown`,this.onMouseDown.bind(this))):this.remove())})}onMouseDown(t){let e=this.getInk();if(!e||this.document.defaultView?.getComputedStyle(e,null).display===`none`)return;if(this.$unstyled()||In(e,`p-ink-active`),e.setAttribute(`data-p-ink-active`,`false`),!kn(e)&&!Fn(e)){let a=Math.max(Pn(this.el.nativeElement),Mn(this.el.nativeElement));e.style.height=a+`px`,e.style.width=a+`px`}let n=Dn(this.el.nativeElement),i=t.pageX-n.left+this.document.body.scrollTop-Fn(e)/2,r=t.pageY-n.top+this.document.body.scrollLeft-kn(e)/2;this.renderer.setStyle(e,`top`,r+`px`),this.renderer.setStyle(e,`left`,i+`px`),this.$unstyled()||Nn(e,`p-ink-active`),e.setAttribute(`data-p-ink-active`,`true`),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(this.$unstyled()||In(a,`p-ink-active`),a.setAttribute(`data-p-ink-active`,`false`))},401)}getInk(){let t=this.el.nativeElement.children;for(let e=0;e<t.length;e++)if(typeof t[e].className==`string`&&t[e].className.indexOf(`p-ink`)!==-1)return t[e];return null}resetInk(){let t=this.getInk();t&&(this.$unstyled()||In(t,`p-ink-active`),t.setAttribute(`data-p-ink-active`,`false`))}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),this.$unstyled()||In(t.currentTarget,`p-ink-active`),t.currentTarget.setAttribute(`data-p-ink-active`,`false`)}create(){let t=this.renderer.createElement(`span`);this.renderer.addClass(t,`p-ink`),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,`data-p-ink`,`true`),this.renderer.setAttribute(t,`data-p-ink-active`,`false`),this.renderer.setAttribute(t,`aria-hidden`,`true`),this.renderer.setAttribute(t,`role`,`presentation`),this.animationListener||(this.animationListener=this.renderer.listen(t,`animationend`,this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,$n(t))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static ɵfac=function(e){return new(e||o)};static ɵdir=kv({type:o,selectors:[[``,`pRipple`,``]],hostAttrs:[1,`p-ripple`],features:[iE([he]),Mf]})}return o})();var me=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: dt('button.font.size');
        font-weight: dt('button.label.font.weight');
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;function ye(o){if(!(o==null||o===``))return typeof o==`number`||/^\d+(\.\d+)?$/.test(o)?`${o}px`:`${o}`}var ve=(()=>{class o{_iconSignal=bo(null);get _icon(){return this._iconSignal()}set _icon(t){this._iconSignal.set(t)}size=cL(void 0);color=cL(void 0);styleClass=cL(void 0);spin=cL(void 0);iconNodes=mE(()=>this._iconSignal()?.nodes??[]);computedSize=mE(()=>this.size()??20);computedClass=mE(()=>{let t=this._iconSignal();return W(`p-icon`,t?.name&&`p-icon-${t.name}`,this.spin()&&`p-icon-spin`,this.styleClass())});get hostWidth(){return this.computedSize()}get hostHeight(){return this.computedSize()}get hostViewBox(){return this._iconSignal()?.svg?.viewBox}get hostFill(){return this._iconSignal()?.svg?.fill}get hostXmlns(){return this._iconSignal()?.svg?.xmlns}hostAriaHidden=`true`;get hostClass(){return this.computedClass()}get hostColor(){return this.color()||null}get hostIconSize(){return ye(this.size())??null}static ɵfac=function(e){return new(e||o)};static ɵdir=kv({type:o,hostVars:12,hostBindings:function(e,n){e&2&&(Rf(`width`,n.hostWidth)(`height`,n.hostHeight)(`viewBox`,n.hostViewBox)(`fill`,n.hostFill)(`xmlns`,n.hostXmlns)(`aria-hidden`,n.hostAriaHidden),BI(n.hostClass),Qf(`color`,n.hostColor)(`--%NS%px-icon-size`,n.hostIconSize))},inputs:{size:[1,`size`],color:[1,`color`],styleClass:[1,`styleClass`],spin:[1,`spin`]}})}return o})();var xe={name:`spinner`,meta:{tags:[`spinner`,`loading`,`process`,`wait`,`buffering`]},svg:{xmlns:`http://www.w3.org/2000/svg`,width:20,height:20,viewBox:`0 0 20 20`,fill:`none`},nodes:[[`path`,{d:`M1 10C1 5.02579 5.02579 1 10 1C12.3905 1 14.562 1.9393 16.1738 3.45312C16.4756 3.73669 16.4905 4.21178 16.207 4.51367C15.9235 4.81558 15.4484 4.83039 15.1465 4.54688C13.7983 3.2807 11.9895 2.5 10 2.5C5.85421 2.5 2.5 5.85421 2.5 10C2.5 14.1458 5.85421 17.5 10 17.5C14.1458 17.5 17.5 14.1458 17.5 10C17.5 9.58579 17.8358 9.25 18.25 9.25C18.6642 9.25 19 9.58579 19 10C19 14.9742 14.9742 19 10 19C5.02579 19 1 14.9742 1 10Z`,fill:`currentColor`,key:`p4wko0`}]]};var Ve=(o,s)=>s[1].key||o;function He(o,s){if(o&1&&(Ul(),Pf(0,`path`)),o&2){let t=II().$implicit;Rf(`d`,t[1].d)(`fill`,t[1].fill)(`fill-opacity`,t[1].fillOpacity)(`fill-rule`,t[1].fillRule)(`clip-rule`,t[1].clipRule)(`stroke`,t[1].stroke)(`stroke-width`,t[1].strokeWidth)(`stroke-opacity`,t[1].strokeOpacity)(`opacity`,t[1].opacity)}}function je(o,s){if(o&1&&(Ul(),Pf(0,`circle`)),o&2){let t=II().$implicit;Rf(`cx`,t[1].cx)(`cy`,t[1].cy)(`r`,t[1].r)(`fill`,t[1].fill)(`fill-opacity`,t[1].fillOpacity)(`opacity`,t[1].opacity)}}function Re(o,s){if(o&1&&(Ul(),Pf(0,`rect`)),o&2){let t=II().$implicit;Rf(`x`,t[1].x)(`y`,t[1].y)(`width`,t[1].width)(`height`,t[1].height)(`rx`,t[1].rx)(`ry`,t[1].ry)(`fill`,t[1].fill)(`fill-opacity`,t[1].fillOpacity)(`opacity`,t[1].opacity)}}function We(o,s){if(o&1&&(Ul(),Pf(0,`line`)),o&2){let t=II().$implicit;Rf(`x1`,t[1].x1)(`y1`,t[1].y1)(`x2`,t[1].x2)(`y2`,t[1].y2)(`stroke`,t[1].stroke)(`stroke-opacity`,t[1].strokeOpacity)(`opacity`,t[1].opacity)}}function Ue(o,s){if(o&1&&(Ul(),Pf(0,`polyline`)),o&2){let t=II().$implicit;Rf(`points`,t[1].points)(`fill`,t[1].fill)(`fill-opacity`,t[1].fillOpacity)(`opacity`,t[1].opacity)}}function Ge(o,s){if(o&1&&(Ul(),Pf(0,`polygon`)),o&2){let t=II().$implicit;Rf(`points`,t[1].points)(`fill`,t[1].fill)(`fill-opacity`,t[1].fillOpacity)(`opacity`,t[1].opacity)}}function qe(o,s){if(o&1&&(Ul(),Pf(0,`ellipse`)),o&2){let t=II().$implicit;Rf(`cx`,t[1].cx)(`cy`,t[1].cy)(`rx`,t[1].rx)(`ry`,t[1].ry)(`fill`,t[1].fill)(`fill-opacity`,t[1].fillOpacity)(`opacity`,t[1].opacity)}}function Qe(o,s){if(o&1&&tI(0,He,1,9,`:svg:path`)(1,je,1,6,`:svg:circle`)(2,Re,1,9,`:svg:rect`)(3,We,1,7,`:svg:line`)(4,Ue,1,4,`:svg:polyline`)(5,Ge,1,4,`:svg:polygon`)(6,qe,1,7,`:svg:ellipse`),o&2){let t,e=s.$implicit;nI((t=e[0])===`path`?0:t===`circle`?1:t===`rect`?2:t===`line`?3:t===`polyline`?4:t===`polygon`?5:t===`ellipse`?6:-1)}}var we=(()=>{class o extends ve{constructor(){super(),this._icon=xe}static ɵfac=function(e){return new(e||o)};static ɵcmp=Sv({type:o,selectors:[[`svg`,`data-p-icon`,`spinner`]],features:[Mf],decls:2,vars:0,template:function(e,n){e&1&&oI(0,Qe,7,1,null,null,Ve),e&2&&iI(n.iconNodes())},encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=` `+e)}static addMultipleClasses(t,e){if(t&&e)if(t.classList){let n=e.trim().split(` `);for(let i=0;i<n.length;i++)t.classList.add(n[i])}else{let n=e.split(` `);for(let i=0;i<n.length;i++)t.className+=` `+n[i]}}static removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp(`(^|\\b)`+e.split(` `).join(`|`)+`(\\b|$)`,`gi`),` `))}static removeMultipleClasses(t,e){t&&e&&[e].flat().filter(Boolean).forEach(n=>n.split(` `).forEach(i=>this.removeClass(t,i)))}static hasClass(t,e){return t&&e?t.classList?t.classList.contains(e):new RegExp(`(^| )`+e+`( |$)`,`gi`).test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return this.isElement(t)?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,n=0;for(let i=0;i<e.length;i++){if(e[i]==t)return n;e[i].nodeType==1&&n++}return-1}static indexWithinGroup(t,e){let n=t.parentNode?t.parentNode.childNodes:[],i=0;for(let r=0;r<n.length;r++){if(n[r]==t)return i;n[r].attributes&&n[r].attributes[e]&&n[r].nodeType==1&&i++}return-1}static appendOverlay(t,e,n=`self`){n!==`self`&&t&&e&&this.appendChild(t,e)}static alignOverlay(t,e,n=`self`,i=!0){t&&e&&(i&&(t.style.minWidth=`${o.getOuterWidth(e)}px`),n===`self`?this.relativePosition(t,e):this.absolutePosition(t,e))}static relativePosition(t,e,n=!0){let i=q=>{if(q)return getComputedStyle(q).getPropertyValue(`position`)===`relative`?q:i(q.parentElement)},r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=e.offsetHeight,l=e.getBoundingClientRect(),g=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),h=this.getViewport(),m=i(t)?.getBoundingClientRect()||{top:-1*g,left:-1*u},C,M,G=`top`;l.top+a+r.height>h.height?(C=l.top-m.top-r.height,G=`bottom`,l.top+C<0&&(C=-1*l.top)):(C=a+l.top-m.top,G=`top`);let Tt=l.left+r.width-h.width,Me=l.left-m.left;if(r.width>h.width?M=(l.left-m.left)*-1:Tt>0?M=Me-Tt:M=l.left-m.left,t.style.top=C+`px`,t.style.left=M+`px`,t.style.transformOrigin=G,n){let q=xn(/-anchor-gutter$/)?.value;t.style.marginTop=G===`bottom`?`calc(${q??`2px`} * -1)`:q??``}}static absolutePosition(t,e,n=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=i.height,a=i.width,l=e.offsetHeight,g=e.offsetWidth,u=e.getBoundingClientRect(),h=this.getWindowScrollTop(),w=this.getWindowScrollLeft(),m=this.getViewport(),C,M;u.top+l+r>m.height?(C=u.top+h-r,t.style.transformOrigin=`bottom`,C<0&&(C=h)):(C=l+u.top+h,t.style.transformOrigin=`top`),u.left+a>m.width?M=Math.max(0,u.left+w+g-a):M=u.left+w,t.style.top=C+`px`,t.style.left=M+`px`,n&&(t.style.marginTop=origin===`bottom`?`calc(var(--p-anchor-gutter) * -1)`:`calc(var(--p-anchor-gutter))`)}static getParents(t,e=[]){let n=t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode;return n==null?e:this.getParents(n,e.concat([n]))}static getScrollableParents(t){let e=[];if(t){let n=this.getParents(t),i=/(auto|scroll)/,r=a=>{let l=window.getComputedStyle(a,null);return i.test(l.getPropertyValue(`overflow`))||i.test(l.getPropertyValue(`overflowX`))||i.test(l.getPropertyValue(`overflowY`))};for(let a of n){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let g=l.split(`,`);for(let u of g){let h=this.findSingle(a,u);h&&r(h)&&e.push(h)}}a.nodeType!==9&&r(a)&&e.push(a)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility=`hidden`,t.style.display=`block`;let e=t.offsetHeight;return t.style.display=`none`,t.style.visibility=`visible`,e}static getHiddenElementOuterWidth(t){t.style.visibility=`hidden`,t.style.display=`block`;let e=t.offsetWidth;return t.style.display=`none`,t.style.visibility=`visible`,e}static getHiddenElementDimensions(t){let e={};return t.style.visibility=`hidden`,t.style.display=`block`,e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display=`none`,t.style.visibility=`visible`,e}static scrollInView(t,e){let n=getComputedStyle(t).getPropertyValue(`borderTopWidth`),i=n?parseFloat(n):0,r=getComputedStyle(t).getPropertyValue(`paddingTop`),a=r?parseFloat(r):0,l=t.getBoundingClientRect(),u=e.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-i-a,h=t.scrollTop,w=t.clientHeight,m=this.getOuterHeight(e);u<0?t.scrollTop=h+u:u+m>w&&(t.scrollTop=h+u-w+m)}static fadeIn(t,e){t.style.opacity=0;let n=+new Date,i=0,r=function(){i=+t.style.opacity.replace(`,`,`.`)+(new Date().getTime()-n)/e,t.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame?window.requestAnimationFrame(r):setTimeout(r,16))};r()}static fadeOut(t,e){let n=1,i=50,a=i/e,l=setInterval(()=>{n=n-a,n<=0&&(n=0,clearInterval(l)),t.style.opacity=n},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){let n=Element.prototype;return(n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1}).call(t,e)}static getOuterWidth(t,e){let n=t.offsetWidth;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,n=getComputedStyle(t);return e+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}static width(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,n=getComputedStyle(t);return e+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),e}static getOuterHeight(t,e){let n=t.offsetHeight;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}static getHeight(t){let e=t.offsetHeight,n=getComputedStyle(t);return e-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),e}static getViewport(){let t=window,e=document,n=e.documentElement,i=e.getElementsByTagName(`body`)[0];return{width:t.innerWidth||n.clientWidth||i.clientWidth,height:t.innerHeight||n.clientHeight||i.clientHeight}}static getOffset(t){let e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let n=t.parentNode;if(!n)throw`Can't replace element`;return n.replaceChild(e,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){let t=window.navigator.userAgent;return t.indexOf(`MSIE `)>0||t.indexOf(`Trident/`)>0||t.indexOf(`Edge/`)>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return`ontouchstart`in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e&&e.el&&e.el.nativeElement)e.el.nativeElement.appendChild(t);else throw`Cannot append `+e+` to `+t}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else if(e.el&&e.el.nativeElement)e.el.nativeElement.removeChild(t);else throw`Cannot remove `+t+` from `+e}static removeElement(t){`remove`in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement==`object`?t instanceof HTMLElement:t&&typeof t==`object`&&t!==null&&t.nodeType===1&&typeof t.nodeName==`string`}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let e=document.createElement(`div`);e.className=`p-scrollbar-measure`,document.body.appendChild(e);let n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement(`div`);t.className=`p-scrollbar-measure`,document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,n){t[e].apply(t,n)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch(t){}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ /]([\w.]+)/.exec(t)||/(webkit)[ /]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ /]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf(`compatible`)<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||``,version:e[2]||`0`}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t==`number`&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<`u`&&t.nodeName&&t.parentNode}static focus(t,e){t&&document.activeElement!==t&&t.focus(e)}static getFocusableSelectorString(t=``){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,e=``){let n=this.find(t,this.getFocusableSelectorString(e)),i=[];for(let r of n){let a=getComputedStyle(r);this.isVisible(r)&&a.display!=`none`&&a.visibility!=`hidden`&&i.push(r)}return i}static getFocusableElement(t,e=``){let n=this.findSingle(t,this.getFocusableSelectorString(e));if(n){let i=getComputedStyle(n);if(this.isVisible(n)&&i.display!=`none`&&i.visibility!=`hidden`)return n}return null}static getFirstFocusableElement(t,e=``){let n=this.getFocusableElements(t,e);return n.length>0?n[0]:null}static getLastFocusableElement(t,e){let n=this.getFocusableElements(t,e);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(t,e=!1){let n=o.getFocusableElements(t),i=0;if(n&&n.length>0){let r=n.indexOf(n[0].ownerDocument.activeElement);e?r==-1||r===0?i=n.length-1:i=r-1:r!=-1&&r!==n.length-1&&(i=r+1)}return n[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,e){if(!t)return null;switch(t){case`document`:return document;case`window`:return window;case`@next`:return e?.nextElementSibling;case`@prev`:return e?.previousElementSibling;case`@parent`:return e?.parentElement;case`@grandparent`:return e?.parentElement?.parentElement;default:{let n=typeof t;if(n===`string`)return document.querySelector(t);if(n===`object`&&Object.prototype.hasOwnProperty.call(t,`nativeElement`))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let r=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return r&&r.nodeType===9||this.isExist(r)?r:null}}}static isClient(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}static getAttribute(t,e){if(t){let n=t.getAttribute(e);return isNaN(n)?n===`true`||n===`false`?n===`true`:n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t=`p-overflow-hidden`){document.body.style.setProperty(`--px-scrollbar-width`,this.calculateBodyScrollbarWidth()+`px`),this.addClass(document.body,t)}static unblockBodyScroll(t=`p-overflow-hidden`){document.body.style.removeProperty(`--px-scrollbar-width`),this.removeClass(document.body,t)}static createElement(t,e={},...n){if(t){let i=document.createElement(t);return this.setAttributes(i,e),i.append(...n),i}}static setAttribute(t,e=``,n){this.isElement(t)&&n!==null&&n!==void 0&&t.setAttribute(e,n)}static setAttributes(t,e={}){if(this.isElement(t)){let n=(i,r)=>{let a=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[r].flat().reduce((l,g)=>{if(g!=null){let u=typeof g;if(u===`string`||u===`number`)l.push(g);else if(u===`object`){let h=Array.isArray(g)?n(i,g):Object.entries(g).map(([w,m])=>i===`style`&&(m||m===0)?`${w.replace(/([a-z])([A-Z])/g,`$1-$2`).toLowerCase()}:${m}`:m?w:void 0);l=h.length?l.concat(h.filter(w=>!!w)):l}}return l},a)};Object.entries(e).forEach(([i,r])=>{if(r!=null){let a=i.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),r):i===`pBind`?this.setAttributes(t,r):(r=i===`class`?[...new Set(n(`class`,r))].join(` `).trim():i===`style`?n(`style`,r).join(`;`).trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=r),t.setAttribute(i,r))}})}}static isFocusableElement(t,e=``){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}}return o})();var Ce=(()=>{class o extends F{autofocus=cL(!1,{alias:`pAutoFocus`,transform:hL});focused=!1;host=D(lr);onAfterContentChecked(){this.autofocus()===!1?this.host.nativeElement.removeAttribute(`autofocus`):this.host.nativeElement.setAttribute(`autofocus`,!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){mi(this.platformId)&&this.autofocus()&&setTimeout(()=>{let t=Se.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static ɵfac=(()=>{let t;return function(n){return(t||(t=Lg(o)))(n||o)}})();static ɵdir=kv({type:o,selectors:[[``,`pAutoFocus`,``]],inputs:{autofocus:[1,`pAutoFocus`,`autofocus`]},features:[Mf]})}return o})();var Xe=`
    
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }

`;var Ye={root:({instance:o})=>{let s=o.value(),t=o.size(),e=o.badgeSize(),n=o.severity();return[`p-badge p-component`,{"p-badge-circle":P(s)&&String(s).length===1,"p-badge-dot":xe$1(s),"p-badge-sm":t===`small`||e===`small`,"p-badge-lg":t===`large`||e===`large`,"p-badge-xl":t===`xlarge`||e===`xlarge`,"p-badge-info":n===`info`,"p-badge-success":n===`success`,"p-badge-warn":n===`warn`,"p-badge-danger":n===`danger`,"p-badge-secondary":n===`secondary`,"p-badge-contrast":n===`contrast`}]}};var _e=(()=>{class o extends ri{name=`badge`;style=Xe;classes=Ye;static ɵfac=(()=>{let t;return function(n){return(t||(t=Lg(o)))(n||o)}})();static ɵprov=we$1({token:o,factory:o.ɵfac})}return o})();var De=new N(`BADGE_INSTANCE`);var $t=(()=>{class o extends F{componentName=`Badge`;$pcBadge=D(De,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(k,{self:!0});badgeSize=cL();size=cL();severity=cL();value=cL();badgeDisabled=cL(!1,{transform:hL});_componentStyle=D(_e);displayStyle=mE(()=>this.badgeDisabled()?`none`:null);dataP=mE(()=>{let t=this.value(),e=this.severity(),n=this.size();return this.cn({circle:t!=null&&String(t).length===1,empty:t==null,disabled:this.badgeDisabled(),[e]:e,[n]:n})});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=(()=>{let t;return function(n){return(t||(t=Lg(o)))(n||o)}})();static ɵcmp=Sv({type:o,selectors:[[`p-badge`]],hostVars:5,hostBindings:function(e,n){e&2&&(Rf(`data-p`,n.dataP()),BI(n.cx(`root`)),Qf(`display`,n.displayStyle()))},inputs:{badgeSize:[1,`badgeSize`],size:[1,`size`],severity:[1,`severity`],value:[1,`value`],badgeDisabled:[1,`badgeDisabled`]},features:[iE([_e,{provide:De,useExisting:o},{provide:X,useExisting:o}]),Vv([k]),Mf],decls:1,vars:1,template:function(e,n){e&1&&KI(0),e&2&&rp(n.value())},dependencies:[zn],encapsulation:2})}return o})();var Ne=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=Av({type:o});static ɵinj=il({imports:[$t,zn,zn]})}return o})();var Ke=[`content`];var Je=[`loadingicon`];var tn=[`icon`];var en=[`*`];function nn(o,s){o&1&&jf(0)}function on(o,s){if(o&1&&Lf(0,`span`,5),o&2){let t=II(3);BI(t.cn(t.cx(`loadingIcon`),`pi-spin`,t.$loadingIcon())),kf(`pBind`,t.ptm(`loadingIcon`)),Rf(`aria-hidden`,!0)}}function rn(o,s){if(o&1&&(Ul(),Lf(0,`svg`,6)),o&2){let t=II(3);BI(t.cn(t.cx(`loadingIcon`),t.cx(`spinnerIcon`))),kf(`spin`,!0)(`pBind`,t.ptm(`loadingIcon`)),Rf(`aria-hidden`,!0)}}function sn(o,s){if(o&1&&tI(0,on,1,4,`span`,2)(1,rn,1,5,`:svg:svg`,4),o&2)nI(II(2).$loadingIcon()?0:1)}function an(o,s){o&1&&jf(0)}function dn(o,s){if(o&1&&Sf(0,an,1,0,`ng-container`,7),o&2){let t=II(2);kf(`ngTemplateOutlet`,t.loadingIconTemplate())(`ngTemplateOutletContext`,t.getLoadingIconTemplateContext())}}function ln(o,s){if(o&1&&tI(0,sn,2,1)(1,dn,1,2,`ng-container`),o&2)nI(II().loadingIconTemplate()?1:0)}function cn(o,s){if(o&1&&Lf(0,`span`,5),o&2){let t=II(2);BI(t.cn(t.cx(`icon`),t.$icon())),kf(`pBind`,t.ptm(`icon`)),Rf(`data-p`,t.dataIconP())}}function un(o,s){o&1&&jf(0)}function pn(o,s){if(o&1&&Sf(0,un,1,0,`ng-container`,7),o&2){let t=II(2);kf(`ngTemplateOutlet`,t.iconTemplate())(`ngTemplateOutletContext`,t.getIconTemplateContext())}}function bn(o,s){if(o&1&&(tI(0,cn,1,4,`span`,2),tI(1,pn,1,2,`ng-container`)),o&2){let t=II();nI(t.$icon()&&!t.iconTemplate()?0:-1),Qm(),nI(!t.icon()&&t.iconTemplate()?1:-1)}}function gn(o,s){if(o&1&&(ni(0,`span`,5),KI(1),ec()),o&2){let t=II();BI(t.cx(`label`)),kf(`pBind`,t.ptm(`label`)),Rf(`aria-hidden`,t.$icon()&&!t.$label())(`data-p`,t.dataLabelP()),Qm(),rp(t.$label())}}function hn(o,s){if(o&1&&Lf(0,`p-badge`,3),o&2){let t=II();kf(`value`,t.$badge())(`severity`,t.$badgeSeverity())(`pt`,t.ptm(`pcBadge`))(`unstyled`,t.unstyled())}}var fn={root:({instance:o})=>{let s=o.hasIcon(),t=o.label(),e=o.buttonProps(),n=o.loading(),i=o.link(),r=o.severity(),a=o.raised(),l=o.rounded(),g=o.text(),u=o.variant(),h=o.outlined(),w=o.size(),m=o.plain(),C=o.badge(),M=o.hasFluid(),G=o.iconPos();return[`p-button p-component`,{"p-button-icon-only":s&&!t&&!e?.label&&!C,"p-button-vertical":(G===`top`||G===`bottom`)&&t,"p-button-loading":n||e?.loading,"p-button-link":i||e?.link,[`p-button-${r||e?.severity}`]:r||e?.severity,"p-button-raised":a||e?.raised,"p-button-rounded":l||e?.rounded,"p-button-text":g||u===`text`||e?.text||e?.variant===`text`,"p-button-outlined":h||u===`outlined`||e?.outlined||e?.variant===`outlined`,"p-button-sm":w===`small`||e?.size===`small`,"p-button-lg":w===`large`||e?.size===`large`,"p-button-plain":m||e?.plain,"p-button-fluid":M}]},loadingIcon:`p-button-loading-icon`,icon:({instance:o})=>{let s=o.iconPos(),t=o.buttonProps(),e=o.label(),n=o.icon();return[`p-button-icon`,{[`p-button-icon-${s||t?.iconPos}`]:e||t?.label,"p-button-icon-left":(s===`left`||t?.iconPos===`left`)&&e||t?.label,"p-button-icon-right":(s===`right`||t?.iconPos===`right`)&&e||t?.label,"p-button-icon-top":(s===`top`||t?.iconPos===`top`)&&e||t?.label,"p-button-icon-bottom":(s===`bottom`||t?.iconPos===`bottom`)&&e||t?.label},n,t?.icon]},spinnerIcon:({instance:o})=>Object.entries(o.cx(`icon`)).filter(([,s])=>!!s).reduce((s,[t])=>s+` ${t}`,`p-button-loading-icon`),label:`p-button-label`};var $e=(()=>{class o extends ri{name=`button`;style=me;classes=fn;static ɵfac=(()=>{let t;return function(n){return(t||(t=Lg(o)))(n||o)}})();static ɵprov=we$1({token:o,factory:o.ɵfac})}return o})();var Te=new N(`BUTTON_INSTANCE`);var mn=(()=>{class o extends F{componentName=`Button`;hostName=cL(``);$pcButton=D(Te,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(k,{self:!0});_componentStyle=D($e);type=cL(`button`);badge=cL();disabled=cL(!1,{transform:hL});raised=cL(!1,{transform:hL});rounded=cL(!1,{transform:hL});text=cL(!1,{transform:hL});plain=cL(!1,{transform:hL});outlined=cL(!1,{transform:hL});link=cL(!1,{transform:hL});tabindex=cL(0,{transform:gL});size=cL();variant=cL();style=cL();styleClass=cL();badgeSeverity=cL(`secondary`);ariaLabel=cL();autofocus=cL(!1,{transform:hL});iconPos=cL(`left`);icon=cL();label=cL();loading=cL(!1,{transform:hL});loadingIcon=cL();severity=cL();buttonProps=cL();fluid=cL(void 0,{transform:hL});iconOnly=cL(!1,{transform:hL});onClick=aL();onFocus=aL();onBlur=aL();contentTemplate=lL(`content`,{descendants:!1});loadingIconTemplate=lL(`loadingicon`,{descendants:!1});iconTemplate=lL(`icon`,{descendants:!1});pcFluid=D(be,{optional:!0,host:!0,skipSelf:!0});hasFluid=mE(()=>this.fluid()??!!this.pcFluid);$type=mE(()=>this.type()||this.buttonProps()?.type);$ariaLabel=mE(()=>this.ariaLabel()||this.buttonProps()?.ariaLabel);mergedStyle=mE(()=>this.style()||this.buttonProps()?.style);$disabled=mE(()=>this.disabled()||this.loading()||this.buttonProps()?.disabled);$severity=mE(()=>this.severity()||this.buttonProps()?.severity);$tabindex=mE(()=>this.tabindex()||this.buttonProps()?.tabindex);$autofocus=mE(()=>this.autofocus()||this.buttonProps()?.autofocus);$loading=mE(()=>this.loading()||this.buttonProps()?.loading);$icon=mE(()=>this.icon()||this.buttonProps()?.icon);$label=mE(()=>this.label()||this.buttonProps()?.label);$badge=mE(()=>this.badge()||this.buttonProps()?.badge);$loadingIcon=mE(()=>this.loadingIcon()||this.buttonProps()?.loadingIcon);$badgeSeverity=mE(()=>this.badgeSeverity()||this.buttonProps()?.badgeSeverity);showLabel=mE(()=>!this.contentTemplate()&&this.$label());showBadge=mE(()=>!this.contentTemplate()&&this.$badge());hasIcon=mE(()=>this.$icon()||this.iconTemplate()||this.loadingIcon()||this.loadingIconTemplate());$outlined=mE(()=>this.outlined()||this.variant()===`outlined`||this.buttonProps()?.outlined||this.buttonProps()?.variant===`outlined`);$text=mE(()=>this.text()||this.variant()===`text`||this.buttonProps()?.text||this.buttonProps()?.variant===`text`);$iconOnly=mE(()=>this.iconOnly()||this.hasIcon()&&!this.$label()&&!this.$badge());dataP=mE(()=>this.cn({[this.size()]:this.size(),"icon-only":this.$iconOnly(),loading:this.$loading(),fluid:this.hasFluid(),rounded:this.rounded(),raised:this.raised(),outlined:this.$outlined(),text:this.$text(),link:this.link(),vertical:(this.iconPos()===`top`||this.iconPos()===`bottom`)&&this.$label()}));dataIconP=mE(()=>this.cn({[this.iconPos()]:this.iconPos(),[this.size()]:this.size()}));dataLabelP=mE(()=>this.cn({[this.size()]:this.size(),"icon-only":this.$iconOnly()}));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}getLoadingIconTemplateContext(){return{class:this.cx(`loadingIcon`),pt:this.ptm(`loadingIcon`)}}getIconTemplateContext(){return{class:this.cx(`icon`),pt:this.ptm(`icon`)}}static ɵfac=(()=>{let t;return function(n){return(t||(t=Lg(o)))(n||o)}})();static ɵcmp=Sv({type:o,selectors:[[`p-button`]],contentQueries:function(e,n,i){e&1&&Uf(i,n.contentTemplate,Ke,4)(i,n.loadingIconTemplate,Je,4)(i,n.iconTemplate,tn,4),e&2&&_I(3)},inputs:{hostName:[1,`hostName`],type:[1,`type`],badge:[1,`badge`],disabled:[1,`disabled`],raised:[1,`raised`],rounded:[1,`rounded`],text:[1,`text`],plain:[1,`plain`],outlined:[1,`outlined`],link:[1,`link`],tabindex:[1,`tabindex`],size:[1,`size`],variant:[1,`variant`],style:[1,`style`],styleClass:[1,`styleClass`],badgeSeverity:[1,`badgeSeverity`],ariaLabel:[1,`ariaLabel`],autofocus:[1,`autofocus`],iconPos:[1,`iconPos`],icon:[1,`icon`],label:[1,`label`],loading:[1,`loading`],loadingIcon:[1,`loadingIcon`],severity:[1,`severity`],buttonProps:[1,`buttonProps`],fluid:[1,`fluid`],iconOnly:[1,`iconOnly`]},outputs:{onClick:`onClick`,onFocus:`onFocus`,onBlur:`onBlur`},features:[iE([$e,{provide:Te,useExisting:o},{provide:X,useExisting:o}]),Vv([k]),Mf],ngContentSelectors:en,decls:7,vars:18,consts:[[`pRipple`,``,3,`click`,`focus`,`blur`,`disabled`,`pAutoFocus`,`pBind`],[4,`ngTemplateOutlet`],[3,`class`,`pBind`],[3,`value`,`severity`,`pt`,`unstyled`],[`data-p-icon`,`spinner`,3,`class`,`spin`,`pBind`],[3,`pBind`],[`data-p-icon`,`spinner`,3,`spin`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(e,n){e&1&&(DI(),ni(0,`button`,0),Hf(`click`,function(r){return n.onClick.emit(r)})(`focus`,function(r){return n.onFocus.emit(r)})(`blur`,function(r){return n.onBlur.emit(r)}),TI(1),Sf(2,nn,1,0,`ng-container`,1),tI(3,ln,2,1),tI(4,bn,2,2),tI(5,gn,2,6,`span`,2),tI(6,hn,1,4,`p-badge`,3),ec()),e&2&&(VI(n.mergedStyle()),BI(n.cn(n.cx(`root`),n.styleClass(),n.buttonProps()?.styleClass)),kf(`disabled`,n.$disabled())(`pAutoFocus`,n.$autofocus())(`pBind`,n.ptm(`root`)),Rf(`type`,n.$type())(`aria-label`,n.$ariaLabel())(`tabindex`,n.$tabindex())(`data-p`,n.dataP())(`data-p-disabled`,n.$disabled())(`data-p-severity`,n.$severity()),Qm(2),kf(`ngTemplateOutlet`,n.contentTemplate()),Qm(),nI(n.$loading()?3:-1),Qm(),nI(n.$loading()?-1:4),Qm(),nI(n.showLabel()?5:-1),Qm(),nI(n.showBadge()?6:-1))},dependencies:[It,fe,Ce,we,Ne,$t,k],encapsulation:2})}return o})();var ai=(()=>{class o{static ɵfac=function(e){return new(e||o)};static ɵmod=Av({type:o});static ɵinj=il({imports:[mn]})}return o})();export{be as a,ai as i,Ln as n,k as o,X as r,mn as s,F as t};