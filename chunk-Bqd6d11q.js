import{$t as iE,Bt as ec,K as Rf,Lt as dI,N as Lf,Nt as cL,O as KI,P as Lg,Pn as rp,Q as TI,R as Mf,Sn as ni,T as II,Tn as oI,Un as tI,W as Qm,Xn as we,Yn as wd,Z as Sv,c as Av,cn as kf,ct as Vv,en as iI,er as xl,gn as mE,l as BI,m as DI,o as Al,p as D,rn as il,w as Hf,xt as aL,yn as nI,z as N}from"./chunk-B6hVtR7X.js";import{A as Hn,N as ks,O as zn,j as Li,k as Gt,w as ri}from"./main-CXOTUDET.js";import{i as ai,o as k,r as X$1,s as mn,t as F}from"./chunk-DSpbvyM9.js";var X=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-weight: dt('avatar.font.weight');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var ie=[`*`];function oe(t,d){if(t&1&&(ni(0,`span`,2),KI(1),ec()),t&2){let e=II();BI(e.cx(`label`)),kf(`pBind`,e.ptm(`label`)),Rf(`data-p`,e.dataP()),Qm(),rp(e.label())}}function re(t,d){if(t&1&&Lf(0,`span`,2),t&2){let e=II();BI(e.cn(e.cx(`icon`),e.icon())),kf(`pBind`,e.ptm(`icon`)),Rf(`data-p`,e.dataP())}}function le(t,d){if(t&1){let e=dI();ni(0,`img`,3),Hf(`error`,function(o){xl(e);return Al(II().imageError(o))}),ec()}if(t&2){let e=II();kf(`pBind`,e.ptm(`image`))(`src`,e.image(),wd),Rf(`aria-label`,e.ariaLabel())(`data-p`,e.dataP())}}var de={root:({instance:t})=>{let d=t.image(),e=t.shape(),n=t.size();return[`p-avatar p-component`,{"p-avatar-image":d!=null,"p-avatar-circle":e===`circle`,"p-avatar-lg":n===`large`,"p-avatar-xl":n===`xlarge`}]},label:`p-avatar-label`,icon:`p-avatar-icon`};var Y=(()=>{class t extends ri{name=`avatar`;style=X;classes=de;static ɵfac=(()=>{let e;return function(o){return(e||(e=Lg(t)))(o||t)}})();static ɵprov=we({token:t,factory:t.ɵfac})}return t})();var Z=new N(`AVATAR_INSTANCE`);var C=(()=>{class t extends F{componentName=`Avatar`;$pcAvatar=D(Z,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(k,{self:!0});label=cL();icon=cL();image=cL();size=cL(`normal`);shape=cL(`square`);ariaLabel=cL();ariaLabelledBy=cL();onImageError=aL();_componentStyle=D(Y);dataP=mE(()=>{let e=this.shape(),n=this.size();return this.cn({[e]:e,[n]:n})});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}imageError(e){this.onImageError.emit(e)}static ɵfac=(()=>{let e;return function(o){return(e||(e=Lg(t)))(o||t)}})();static ɵcmp=Sv({type:t,selectors:[[`p-avatar`]],hostVars:5,hostBindings:function(n,o){n&2&&(Rf(`aria-label`,o.ariaLabel())(`aria-labelledby`,o.ariaLabelledBy())(`data-p`,o.dataP()),BI(o.cx(`root`)))},inputs:{label:[1,`label`],icon:[1,`icon`],image:[1,`image`],size:[1,`size`],shape:[1,`shape`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`]},outputs:{onImageError:`onImageError`},features:[iE([Y,{provide:Z,useExisting:t},{provide:X$1,useExisting:t}]),Vv([k]),Mf],ngContentSelectors:ie,decls:4,vars:1,consts:[[3,`pBind`,`class`],[3,`pBind`,`src`],[3,`pBind`],[3,`error`,`pBind`,`src`]],template:function(n,o){n&1&&(DI(),TI(0),tI(1,oe,2,5,`span`,0)(2,re,1,4,`span`,0)(3,le,1,4,`img`,1)),n&2&&(Qm(),nI(o.label()?1:o.icon()?2:o.image()?3:-1))},dependencies:[zn,k],encapsulation:2})}return t})();var ee=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Av({type:t});static ɵinj=il({imports:[C,zn,zn]})}return t})();var ce=(t,d)=>d.route;function pe(t,d){if(t&1&&(ni(0,`a`,17),Lf(1,`i`),ni(2,`span`),KI(3),ec(),Lf(4,`i`,24),ec()),t&2){let e=d.$implicit;kf(`routerLink`,e.route),Qm(),BI(e.icon),Qm(2),rp(e.label)}}var te=class t{auth=D(Li);modules=this.auth.role===`admin`?[{label:`Buy Items`,icon:`pi pi-shopping-cart`,route:`/dashboard/buy-items`},{label:`Assign Task`,icon:`pi pi-send`,route:`/dashboard/assign-task`}]:[{label:`Tasks`,icon:`pi pi-list-check`,route:`/dashboard/tasks`}];static ɵfac=function(e){return new(e||t)};static ɵcmp=Sv({type:t,selectors:[[`app-dashboard-layout`]],decls:44,vars:4,consts:[[1,`dashboard-shell`],[1,`topbar`],[`routerLink`,`/dashboard`,1,`wordmark`],[1,`wordmark-icon`],[1,`pi`,`pi-shopping-bag`],[1,`topbar-actions`],[`text`,``,`rounded`,``,`icon`,`pi pi-bell`,`ariaLabel`,`Notifications`],[1,`topbar-divider`],[`shape`,`circle`,`styleClass`,`user-avatar`,3,`label`],[1,`user-info`],[`text`,``,`rounded`,``,`icon`,`pi pi-sign-out`,`ariaLabel`,`Sign out`,3,`onClick`],[1,`dashboard-body`],[1,`sidebar`],[1,`sidebar-intro`],[1,`eyebrow`],[`aria-label`,`Application modules`],[1,`nav-label`],[`routerLinkActive`,`active`,1,`module-link`,3,`routerLink`],[1,`sidebar-bottom`],[1,`help-box`],[1,`pi`,`pi-question-circle`],[1,`pi`,`pi-arrow-up-right`],[1,`content`],[1,`footer`],[1,`pi`,`pi-arrow-up-right`,`link-arrow`]],template:function(e,n){e&1&&(ni(0,`div`,0)(1,`header`,1)(2,`a`,2)(3,`span`,3),Lf(4,`i`,4),ec(),KI(5,`northstar`),ec(),ni(6,`div`,5),Lf(7,`p-button`,6)(8,`span`,7)(9,`p-avatar`,8),ni(10,`div`,9)(11,`strong`),KI(12),ec(),ni(13,`span`),KI(14),ec()(),ni(15,`p-button`,10),Hf(`onClick`,function(){return n.auth.logout()}),ec()()(),ni(16,`div`,11)(17,`aside`,12)(18,`div`,13)(19,`span`,14),KI(20,`WORKSPACE`),ec(),ni(21,`h1`),KI(22,`Command center`),ec()(),ni(23,`nav`,15)(24,`span`,16),KI(25),ec(),oI(26,pe,5,4,`a`,17,ce),ec(),ni(28,`div`,18)(29,`div`,19),Lf(30,`i`,20),ni(31,`div`)(32,`strong`),KI(33,`Need a hand?`),ec(),ni(34,`span`),KI(35,`Visit the help center`),ec()(),Lf(36,`i`,21),ec()()(),ni(37,`main`,22),Lf(38,`router-outlet`),ec()(),ni(39,`footer`,23)(40,`span`),KI(41,`© 2026 Northstar Commerce`),ec(),ni(42,`span`),KI(43,`Built for better buying`),ec()()()),e&2&&(Qm(9),kf(`label`,n.auth.role===`admin`?`AD`:`WK`),Qm(3),rp(n.auth.username),Qm(2),rp(n.auth.role),Qm(11),rp(n.modules.length?`MODULES`:`NO MODULES`),Qm(),iI(n.modules))},dependencies:[Gt,ks,Hn,ee,C,ai,mn],styles:[`[_nghost-%COMP%]{display:block;height:100dvh;overflow:hidden}.dashboard-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100dvh;overflow:hidden;background:#f6f8fb}.topbar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:5rem;padding:0 3rem;background:#fff;border-bottom:1px solid #e8ebf0}.wordmark[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.65rem;color:#172033;font-family:Georgia,serif;font-size:1.35rem;text-decoration:none}.wordmark-icon[_ngcontent-%COMP%]{display:grid;place-items:center;width:2rem;height:2rem;border-radius:.6rem;background:#e3bf71;color:#17344e;font-size:.9rem}.topbar-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;color:#536074}.topbar-divider[_ngcontent-%COMP%]{width:1px;height:2rem;background:#e8ebf0}.user-avatar[_ngcontent-%COMP%]{background:#dbeee6;color:#206252;font-size:.75rem;font-weight:700}.user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.2rem;font-size:.8rem}.user-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8992a2;font-size:.7rem}.dashboard-body[_ngcontent-%COMP%]{display:grid;grid-template-columns:17rem minmax(0,1fr);flex:1;min-height:0}.sidebar[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:3.5rem 1.5rem 1.5rem;background:#17344e;color:#fff}.sidebar-intro[_ngcontent-%COMP%]{padding:0 1rem;margin-bottom:4rem}.eyebrow[_ngcontent-%COMP%], .nav-label[_ngcontent-%COMP%]{color:#e3bf71;font-size:.65rem;font-weight:700;letter-spacing:.14em}.sidebar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:.8rem 0 0;font-family:Georgia,serif;font-size:1.65rem;font-weight:400}.nav-label[_ngcontent-%COMP%]{display:block;padding:0 1rem;margin-bottom:.8rem;color:#8ea4b7}.module-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.8rem;padding:.9rem 1rem;border-left:2px solid transparent;border-radius:.4rem;color:#aec0ce;font-size:.85rem;text-decoration:none;transition:background .15s ease,color .15s ease}.module-link[_ngcontent-%COMP%]:hover, .module-link.active[_ngcontent-%COMP%]{border-left-color:#e3bf71;background:#ffffff17;color:#fff}.module-link.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child{color:#e3bf71}.link-arrow[_ngcontent-%COMP%]{margin-left:auto;font-size:.7rem;opacity:0}.module-link.active[_ngcontent-%COMP%]   .link-arrow[_ngcontent-%COMP%]{opacity:1}.sidebar-bottom[_ngcontent-%COMP%]{margin-top:auto}.help-box[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.7rem;padding:1rem;border:1px solid rgb(255 255 255 / 12%);border-radius:.5rem;color:#8ea4b7;font-size:.7rem}.help-box[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]:first-child{color:#e3bf71;font-size:1rem}.help-box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;gap:.3rem}.help-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff;font-size:.75rem;font-weight:600}.content[_ngcontent-%COMP%]{min-width:0;min-height:0;overflow-y:auto;padding:clamp(2rem,5vw,4rem)}.footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:1rem 3rem;border-top:1px solid #e8ebf0;color:#9aa3b1;font-size:.7rem}@media(max-width:700px){.topbar[_ngcontent-%COMP%]{flex:0 0 4.5rem;height:4.5rem;padding:0 1rem}.user-info[_ngcontent-%COMP%], .topbar-divider[_ngcontent-%COMP%]{display:none}.dashboard-body[_ngcontent-%COMP%]{display:flex;flex-direction:column}.sidebar[_ngcontent-%COMP%]{flex:0 0 auto;padding:.8rem 1rem}.sidebar-intro[_ngcontent-%COMP%]{display:none}.sidebar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;overflow-x:auto}.nav-label[_ngcontent-%COMP%]{flex:0 0 auto;padding:0;margin:0}.module-link[_ngcontent-%COMP%]{flex:0 0 auto;padding:.65rem .8rem}.sidebar-bottom[_ngcontent-%COMP%]{display:none}.content[_ngcontent-%COMP%]{flex:1;padding:1.5rem 1rem}.footer[_ngcontent-%COMP%]{flex:0 0 auto;padding:.75rem 1rem}}`]})};export{te as DashboardLayoutComponent};