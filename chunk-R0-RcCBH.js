import{$t as iE,At as bo,K as Rf,Nt as cL,P as Lg,R as Mf,Xn as we,Zt as hL,c as Av,ct as Vv,gn as mE,k as Kl,l as BI,p as D,rn as il,un as kv,w as Hf,z as N}from"./chunk-B6hVtR7X.js";import{p as P$1,w as ri}from"./main-CXOTUDET.js";import{i as V$1}from"./chunk-DkjFKiUl.js";import{a as be,o as k,r as X,t as F}from"./chunk-DSpbvyM9.js";var S=(()=>{class t extends F{modelValue=bo(void 0);$filled=mE(()=>P$1(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static ɵfac=(()=>{let e;return function(o){return(e||(e=Lg(t)))(o||t)}})();static ɵdir=kv({type:t,features:[Mf]})}return t})();var z=`
    .p-inputtext {
        font-weight: dt('inputtext.font.weight');
        font-size: dt('inputtext.font.size');
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var V={root:({instance:t})=>[`p-inputtext p-component`,{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize()===`small`,"p-inputtext-lg":t.pSize()===`large`,"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-inputtext-fluid":t.hasFluid}]};var P=(()=>{class t extends ri{name=`inputtext`;style=z;classes=V;static ɵfac=(()=>{let e;return function(o){return(e||(e=Lg(t)))(o||t)}})();static ɵprov=we({token:t,factory:t.ɵfac})}return t})();var C=new N(`INPUTTEXT_INSTANCE`);var tt=(()=>{class t extends S{componentName=`InputText`;hostName=cL(``);pInputTextPT=cL();pInputTextUnstyled=cL();bindDirectiveInstance=D(k,{self:!0});$pcInputText=D(C,{optional:!0,skipSelf:!0})??void 0;ngControl=D(V$1,{optional:!0,self:!0});pcFluid=D(be,{optional:!0,host:!0,skipSelf:!0});pSize=cL();variant=cL();fluid=cL(void 0,{transform:hL});invalid=cL(void 0,{transform:hL});$variant=mE(()=>this.variant()||this.config.inputVariant()||void 0);_componentStyle=D(P);get hasFluid(){return this.fluid()??!!this.pcFluid}dataP=mE(()=>this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.pSize()]:this.pSize()}));constructor(){super(),Kl(()=>{let e=this.pInputTextPT();e&&this.directivePT.set(e)}),Kl(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}static ɵfac=function(n){return new(n||t)};static ɵdir=kv({type:t,selectors:[[``,`pInputText`,``]],hostVars:3,hostBindings:function(n,o){n&1&&Hf(`input`,function(){return o.onInput()}),n&2&&(Rf(`data-p`,o.dataP()),BI(o.cx(`root`)))},inputs:{hostName:[1,`hostName`],pInputTextPT:[1,`pInputTextPT`],pInputTextUnstyled:[1,`pInputTextUnstyled`],pSize:[1,`pSize`],variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`]},features:[iE([P,{provide:C,useExisting:t},{provide:X,useExisting:t}]),Vv([k]),Mf]})}return t})();var et=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Av({type:t});static ɵinj=il({})}return t})();export{tt as n,et as t};