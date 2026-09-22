import{$t as iE,Bt as ec,K as Rf,N as Lf,Nt as cL,O as KI,P as Lg,Pn as rp,Q as TI,R as Mf,Sn as ni,T as II,Un as tI,W as Qm,Xn as we,Z as Sv,Zt as hL,an as jf,c as Av,cn as kf,ct as Vv,dn as lL,gn as mE,l as BI,m as DI,nt as Uf,p as D,rn as il,yn as nI,yt as _I,z as N}from"./chunk-B6hVtR7X.js";import{L as It,O as zn,w as ri}from"./main-CXOTUDET.js";import{o as k,r as X$1,t as F}from"./chunk-DSpbvyM9.js";var H=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var J=[`icon`];var K=[`*`];function L(n,i){if(n&1&&Lf(0,`span`,1),n&2){let e=II(2);BI(e.cn(e.cx(`icon`),e.icon())),kf(`pBind`,e.ptm(`icon`))}}function U(n,i){if(n&1&&tI(0,L,1,3,`span`,0),n&2)nI(II().icon()?0:-1)}function W(n,i){if(n&1&&(ni(0,`span`,1),jf(1,2),ec()),n&2){let e=II();BI(e.cx(`icon`)),kf(`pBind`,e.ptm(`icon`)),Qm(),kf(`ngTemplateOutlet`,e.iconTemplate())}}var X={root:({instance:n})=>{let i=n.severity(),e=n.rounded();return[`p-tag p-component`,{"p-tag-info":i===`info`,"p-tag-success":i===`success`,"p-tag-warn":i===`warn`,"p-tag-danger":i===`danger`,"p-tag-secondary":i===`secondary`,"p-tag-contrast":i===`contrast`,"p-tag-rounded":e}]},icon:`p-tag-icon`,label:`p-tag-label`};var q=(()=>{class n extends ri{name=`tag`;style=H;classes=X;static ɵfac=(()=>{let e;return function(o){return(e||(e=Lg(n)))(o||n)}})();static ɵprov=we({token:n,factory:n.ɵfac})}return n})();var R=new N(`TAG_INSTANCE`);var Y=(()=>{class n extends F{componentName=`Tag`;$pcTag=D(R,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(k,{self:!0});severity=cL();value=cL();icon=cL();rounded=cL(!1,{transform:hL});iconTemplate=lL(`icon`,{descendants:!1});_componentStyle=D(q);dataP=mE(()=>{let e=this.severity(),t=this.rounded();return this.cn({rounded:t,[e]:e})});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=(()=>{let e;return function(o){return(e||(e=Lg(n)))(o||n)}})();static ɵcmp=Sv({type:n,selectors:[[`p-tag`]],contentQueries:function(t,o,$){t&1&&Uf($,o.iconTemplate,J,4),t&2&&_I()},hostVars:3,hostBindings:function(t,o){t&2&&(Rf(`data-p`,o.dataP()),BI(o.cx(`root`)))},inputs:{severity:[1,`severity`],value:[1,`value`],icon:[1,`icon`],rounded:[1,`rounded`]},features:[iE([q,{provide:R,useExisting:n},{provide:X$1,useExisting:n}]),Vv([k]),Mf],ngContentSelectors:K,decls:5,vars:5,consts:[[3,`class`,`pBind`],[3,`pBind`],[3,`ngTemplateOutlet`]],template:function(t,o){t&1&&(DI(),TI(0),tI(1,U,1,1)(2,W,2,4,`span`,0),ni(3,`span`,1),KI(4),ec()),t&2&&(Qm(),nI(o.iconTemplate()?2:1),Qm(2),BI(o.cx(`label`)),kf(`pBind`,o.ptm(`label`)),Qm(),rp(o.value()))},dependencies:[It,zn,k],encapsulation:2})}return n})();var mn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=Av({type:n});static ɵinj=il({imports:[Y,zn,zn]})}return n})();export{mn as n,Y as t};