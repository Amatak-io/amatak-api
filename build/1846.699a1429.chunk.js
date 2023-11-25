"use strict";(self.webpackChunkamatak=self.webpackChunkamatak||[]).push([[1846],{1846:(X,x,s)=>{s.r(x),s.d(x,{ProfilePage:()=>ae});var e=s(74081),d=s(27279),I=s(51926),j=s(73354),A=s(27875),T=s(74758),M=s(48102),c=s(93415),_=s(10701),y=s(32370),R=s(23298),g=s(74577),Y=s(12881),G=s(28040),P=s(63738),o=s(15530),J=s(59082),K=s(98264),w=s(92191),V=s(71563),k=s(51943),Z=s(364),C=s(61020),U=s(40464),F=s(19003),q=s(47853),$=s(47599),b=s(44328),ee=s(8291),je=s(15816),Ae=s(97442),Te=s(13576),ye=s(87830),Ce=s(47184),Re=s(59461),Ue=s(49204),Se=s(75719),Be=s(74919),We=s(29206),Ke=s(98934),we=s(43433),Ze=s(64797),Fe=s(85811),$e=s(8175);const se=q.Ry().shape(ee.s),ae=()=>{const{changeLocale:t,localeNames:l}=(0,$.M)(),{setUserDisplayName:m}=(0,o.L7)(),{formatMessage:i}=(0,C.Z)(),{trackUsage:n}=(0,o.rS)(),u=(0,o.lm)(),{lockApp:r,unlockApp:O}=(0,o.o1)(),{notifyStatus:D}=(0,I.G)(),{currentTheme:L,themes:ie,onChangeTheme:oe}=(0,$.P)(),{get:N,put:de}=(0,o.kY)();(0,o.go)();const{isLoading:le,data:v,refetch:me}=(0,U.useQuery)("user",async()=>{const{data:a}=await N("/admin/users/me");return a.data},{onSuccess(){D(i({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"}))},onError(){u({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),{isLoading:ce,data:_e}=(0,U.useQuery)(["providers","isSSOLocked"],async()=>{const{data:{data:a}}=await N("/admin/providers/isSSOLocked");return a},{enabled:window.strapi.isEE&&window.strapi.features.isEnabled("sso"),onError(){u({type:"warning",message:{id:"Settings.permissions.users.sso.provider.error"}})}}),ge=le||ce,Q=(0,U.useMutation)(async a=>{const{confirmPassword:E,currentTheme:p,...h}=a,{data:f}=await de("/admin/users/me",h);return{...f.data,currentTheme:p}},{async onSuccess(a){await me();const{email:E,firstname:p,lastname:h,username:f,preferedLanguage:S}=a;o.I8.setUserInfo({email:E,firstname:p,lastname:h,username:f,preferedLanguage:S});const B=a.username||(0,b.g)(a.firstname??"",a.lastname);m(B),a.preferedLanguage&&t(a.preferedLanguage),oe(a.currentTheme),n("didChangeMode",{newMode:a.currentTheme}),u({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})},async onSettled(){O()}}),{isLoading:ue}=Q,fe=async(a,{setErrors:E})=>{r();const p=a.username;Q.mutate({...a,username:p},{onError(h){const f=h?.response?.data;return f?.data?E(f.data):u({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};if(ge||!v)return(0,e.jsxs)(j.o,{"aria-busy":"true",children:[(0,e.jsx)(Z.q,{title:i({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),(0,e.jsx)(A.T,{title:i({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),(0,e.jsx)(T.D,{children:(0,e.jsx)(o.dO,{})})]});const pe=_e?.isSSOLocked??!1,{email:he,firstname:Ee,lastname:Me,username:Pe,preferedLanguage:Oe}=v,De={email:he,firstname:Ee,lastname:Me,username:Pe,preferedLanguage:Oe,currentTheme:L,confirmPassword:"",password:""};return(0,e.jsxs)(j.o,{"aria-busy":ue,children:[(0,e.jsx)(Z.q,{title:i({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),(0,e.jsx)(V.J9,{onSubmit:fe,initialValues:De,validateOnChange:!1,validationSchema:se,enableReinitialize:!0,children:({errors:a,values:{email:E,firstname:p,lastname:h,username:f,preferedLanguage:S,currentTheme:B,password:Le,confirmPassword:ve},handleChange:W,isSubmitting:xe,dirty:Ie})=>(0,e.jsxs)(o.l0,{children:[(0,e.jsx)(A.T,{title:v.username||(0,b.g)(v.firstname??"",v.lastname),primaryAction:(0,e.jsx)(M.z,{startIcon:(0,e.jsx)(J.Z,{}),loading:xe,type:"submit",disabled:!Ie,children:i({id:"global.save",defaultMessage:"Save"})})}),(0,e.jsx)(c.x,{paddingBottom:10,children:(0,e.jsx)(T.D,{children:(0,e.jsxs)(_.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsx)(re,{errors:a,onChange:W,values:{firstname:p,lastname:h,username:f,email:E}}),!pe&&(0,e.jsx)(te,{errors:a,onChange:W,values:{password:Le,confirmPassword:ve}}),(0,e.jsx)(ne,{allApplicationThemes:ie,onChange:W,values:{preferedLanguage:S,currentTheme:B},localeNames:l})]})})})]})})]})},te=({errors:t,onChange:l,values:m})=>{const{formatMessage:i}=(0,C.Z)(),[n,u]=d.useState(!1),[r,O]=d.useState(!1);return(0,e.jsx)(c.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(_.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(y.Z,{variant:"delta",as:"h2",children:i({id:"global.change-password",defaultMessage:"Change password"})}),(0,e.jsxs)(R.r,{gap:5,children:[(0,e.jsx)(g.P,{s:12,col:6,children:(0,e.jsx)(z,{error:t.password?i({id:t.password,defaultMessage:t.password}):"",onChange:l,value:m.password,label:i({id:"global.password",defaultMessage:"Password"}),name:"password",type:n?"text":"password",autoComplete:"new-password",endAction:(0,e.jsx)(H,{onClick:D=>{D.stopPropagation(),u(L=>!L)},label:i(n?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:n?(0,e.jsx)(K.Z,{}):(0,e.jsx)(w.Z,{})})})}),(0,e.jsx)(g.P,{s:12,col:6,children:(0,e.jsx)(z,{error:t.confirmPassword?i({id:t.confirmPassword,defaultMessage:t.confirmPassword}):"",onChange:l,value:m.confirmPassword,label:i({id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"}),name:"confirmPassword",type:r?"text":"password",autoComplete:"new-password",endAction:(0,e.jsx)(H,{onClick:D=>{D.stopPropagation(),O(L=>!L)},label:i(r?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"}),children:r?(0,e.jsx)(K.Z,{}):(0,e.jsx)(w.Z,{})})})})]})]})})},z=(0,F.ZP)(Y.o)`
  ::-ms-reveal {
    display: none;
  }
`,H=(0,F.ZP)(G.E)`
  svg {
    height: ${(0,o.Q1)(16)};
    width: ${(0,o.Q1)(16)};
    path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }
`,ne=({onChange:t,values:l,localeNames:m,allApplicationThemes:i={}})=>{const{formatMessage:n}=(0,C.Z)(),u=Object.keys(i).filter(r=>i[r]);return(0,e.jsx)(c.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(_.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsxs)(_.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(y.Z,{variant:"delta",as:"h2",children:n({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})}),(0,e.jsx)(y.Z,{children:n({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:(0,e.jsx)(c.x,{as:"a",color:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales",children:n({id:"Settings.profile.form.section.experience.here",defaultMessage:"here"})})})})]}),(0,e.jsxs)(R.r,{gap:5,children:[(0,e.jsx)(g.P,{s:12,col:6,children:(0,e.jsx)(P.q4,{label:n({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:n({id:"global.select",defaultMessage:"Select"}),hint:n({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:()=>{t({target:{name:"preferedLanguage",value:null}})},clearLabel:n({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:l.preferedLanguage,onChange:r=>{t({target:{name:"preferedLanguage",value:r}})},children:Object.entries(m).map(([r,O])=>(0,e.jsx)(P.ag,{value:r,children:O},r))})}),(0,e.jsx)(g.P,{s:12,col:6,children:(0,e.jsxs)(P.q4,{label:n({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:n({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:n({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:l.currentTheme,onChange:r=>{t({target:{name:"currentTheme",value:r}})},children:[(0,e.jsx)(P.ag,{value:"system",children:n({id:"Settings.profile.form.section.experience.mode.option-system-label",defaultMessage:"Use system settings"})}),u.map(r=>(0,e.jsx)(P.ag,{value:r,children:n({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:n({id:r,defaultMessage:k(r)})})},r))]})})]})]})})},re=({errors:t,onChange:l,values:m})=>{const{formatMessage:i}=(0,C.Z)();return(0,e.jsx)(c.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(_.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(y.Z,{variant:"delta",as:"h2",children:i({id:"global.profile",defaultMessage:"Profile"})}),(0,e.jsxs)(R.r,{gap:5,children:[(0,e.jsx)(g.P,{s:12,col:6,children:(0,e.jsx)(o.jm,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:t.firstname,onChange:l,value:m.firstname,type:"text",name:"firstname",required:!0})}),(0,e.jsx)(g.P,{s:12,col:6,children:(0,e.jsx)(o.jm,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:t.lastname,onChange:l,value:m.lastname,type:"text",name:"lastname"})}),(0,e.jsx)(g.P,{s:12,col:6,children:(0,e.jsx)(o.jm,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:t.email,onChange:l,value:m.email,type:"email",name:"email",required:!0})}),(0,e.jsx)(g.P,{s:12,col:6,children:(0,e.jsx)(o.jm,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:t.username,onChange:l,value:m.username,type:"text",name:"username"})})]})]})})}},8291:(X,x,s)=>{s.d(x,{a:()=>T,s:()=>j});var e=s(47853),d=s(15530);const I={firstname:e.Z_().trim().required(d.I0.required),lastname:e.Z_(),email:e.Z_().email(d.I0.email).lowercase().required(d.I0.required),username:e.Z_().nullable(),password:e.Z_().min(8,d.I0.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Z_().min(8,d.I0.minLength).oneOf([e.iH("password"),null],"components.Input.error.password.noMatch").when("password",(M,c)=>M?c.required(d.I0.required):c)},j={...I,currentPassword:e.Z_().when(["password","confirmPassword"],(M,c,_)=>M||c?_.required(d.I0.required):_),preferedLanguage:e.Z_().nullable()},A={roles:e.IX().min(1,d.I0.required).required(d.I0.required)},T=e.Ry().shape({...I,isActive:e.Xg(),...A})}}]);
