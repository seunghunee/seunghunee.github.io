"use strict";(self.webpackChunkshinsaesang=self.webpackChunkshinsaesang||[]).push([[691],{6056:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});var o=a(7294),r=a(7462),n=a(5987),l=a(5505),i=a(882);var c=o.createContext({}),s=o.forwardRef((function(e,t){var a=e.children,i=e.classes,s=e.className,d=e.component,m=void 0===d?"ul":d,p=e.dense,u=void 0!==p&&p,g=e.disablePadding,f=void 0!==g&&g,b=e.subheader,v=(0,n.Z)(e,["children","classes","className","component","dense","disablePadding","subheader"]),h=o.useMemo((function(){return{dense:u}}),[u]);return o.createElement(c.Provider,{value:h},o.createElement(m,(0,r.Z)({className:(0,l.Z)(i.root,s,u&&i.dense,!f&&i.padding,b&&i.subheader),ref:t},v),b,a))})),d=(0,i.Z)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(s),m=a(7055),p=a(1008),u=a(1291),g=a(3935),f="undefined"==typeof window?o.useEffect:o.useLayoutEffect,b=o.forwardRef((function(e,t){var a=e.alignItems,i=void 0===a?"center":a,s=e.autoFocus,d=void 0!==s&&s,b=e.button,v=void 0!==b&&b,h=e.children,y=e.classes,C=e.className,k=e.component,Z=e.ContainerComponent,x=void 0===Z?"li":Z,N=e.ContainerProps,S=(N=void 0===N?{}:N).className,E=(0,n.Z)(N,["className"]),w=e.dense,R=void 0!==w&&w,$=e.disabled,I=void 0!==$&&$,T=e.disableGutters,P=void 0!==T&&T,L=e.divider,V=void 0!==L&&L,A=e.focusVisibleClassName,U=e.selected,z=void 0!==U&&U,D=(0,n.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),M=o.useContext(c),O={dense:R||M.dense||!1,alignItems:i},B=o.useRef(null);f((function(){d&&B.current&&B.current.focus()}),[d]);var F=o.Children.toArray(h),H=F.length&&(0,p.Z)(F[F.length-1],["ListItemSecondaryAction"]),K=o.useCallback((function(e){B.current=g.findDOMNode(e)}),[]),_=(0,u.Z)(K,t),G=(0,r.Z)({className:(0,l.Z)(y.root,C,O.dense&&y.dense,!P&&y.gutters,V&&y.divider,I&&y.disabled,v&&y.button,"center"!==i&&y.alignItemsFlexStart,H&&y.secondaryAction,z&&y.selected),disabled:I},D),j=k||"li";return v&&(G.component=k||"div",G.focusVisibleClassName=(0,l.Z)(y.focusVisible,A),j=m.Z),H?(j=G.component||k?j:"div","li"===x&&("li"===j?j="div":"li"===G.component&&(G.component="div")),o.createElement(c.Provider,{value:O},o.createElement(x,(0,r.Z)({className:(0,l.Z)(y.container,S),ref:_},E),o.createElement(j,G,F),F.pop()))):o.createElement(c.Provider,{value:O},o.createElement(j,(0,r.Z)({ref:_},G),F))})),v=(0,i.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(b),h=a(7255),y=a(7959),C=a(8063),k=o.forwardRef((function(e,t){var a=e.classes,i=e.className,c=e.raised,s=void 0!==c&&c,d=(0,n.Z)(e,["classes","className","raised"]);return o.createElement(C.Z,(0,r.Z)({className:(0,l.Z)(a.root,i),elevation:s?8:1,ref:t},d))})),Z=(0,i.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(k),x=o.forwardRef((function(e,t){var a=e.children,i=e.classes,c=e.className,s=e.focusVisibleClassName,d=(0,n.Z)(e,["children","classes","className","focusVisibleClassName"]);return o.createElement(m.Z,(0,r.Z)({className:(0,l.Z)(i.root,c),focusVisibleClassName:(0,l.Z)(s,i.focusVisible),ref:t},d),a,o.createElement("span",{className:i.focusHighlight}))})),N=(0,i.Z)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(x),S=o.forwardRef((function(e,t){var a=e.classes,i=e.className,c=e.component,s=void 0===c?"div":c,d=(0,n.Z)(e,["classes","className","component"]);return o.createElement(s,(0,r.Z)({className:(0,l.Z)(a.root,i),ref:t},d))})),E=(0,i.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(S),w=a(453),R=a(920),$=(0,a(9123).Z)(o.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),I=a(7595),T=a(1664);function P(e){return"Backspace"===e.key||"Delete"===e.key}var L=o.forwardRef((function(e,t){var a=e.avatar,i=e.classes,c=e.className,s=e.clickable,d=e.color,p=void 0===d?"default":d,g=e.component,f=e.deleteIcon,b=e.disabled,v=void 0!==b&&b,h=e.icon,y=e.label,C=e.onClick,k=e.onDelete,Z=e.onKeyDown,x=e.onKeyUp,N=e.size,S=void 0===N?"medium":N,E=e.variant,w=void 0===E?"default":E,R=(0,n.Z)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),I=o.useRef(null),L=(0,u.Z)(I,t),V=function(e){e.stopPropagation(),k&&k(e)},A=!(!1===s||!C)||s,U="small"===S,z=g||(A?m.Z:"div"),D=z===m.Z?{component:"div"}:{},M=null;if(k){var O=(0,l.Z)("default"!==p&&("default"===w?i["deleteIconColor".concat((0,T.Z)(p))]:i["deleteIconOutlinedColor".concat((0,T.Z)(p))]),U&&i.deleteIconSmall);M=f&&o.isValidElement(f)?o.cloneElement(f,{className:(0,l.Z)(f.props.className,i.deleteIcon,O),onClick:V}):o.createElement($,{className:(0,l.Z)(i.deleteIcon,O),onClick:V})}var B=null;a&&o.isValidElement(a)&&(B=o.cloneElement(a,{className:(0,l.Z)(i.avatar,a.props.className,U&&i.avatarSmall,"default"!==p&&i["avatarColor".concat((0,T.Z)(p))])}));var F=null;return h&&o.isValidElement(h)&&(F=o.cloneElement(h,{className:(0,l.Z)(i.icon,h.props.className,U&&i.iconSmall,"default"!==p&&i["iconColor".concat((0,T.Z)(p))])})),o.createElement(z,(0,r.Z)({role:A||k?"button":void 0,className:(0,l.Z)(i.root,c,"default"!==p&&[i["color".concat((0,T.Z)(p))],A&&i["clickableColor".concat((0,T.Z)(p))],k&&i["deletableColor".concat((0,T.Z)(p))]],"default"!==w&&[i.outlined,{primary:i.outlinedPrimary,secondary:i.outlinedSecondary}[p]],v&&i.disabled,U&&i.sizeSmall,A&&i.clickable,k&&i.deletable),"aria-disabled":!!v||void 0,tabIndex:A||k?0:void 0,onClick:C,onKeyDown:function(e){e.currentTarget===e.target&&P(e)&&e.preventDefault(),Z&&Z(e)},onKeyUp:function(e){e.currentTarget===e.target&&(k&&P(e)?k(e):"Escape"===e.key&&I.current&&I.current.blur()),x&&x(e)},ref:L},D,R),B||F,o.createElement("span",{className:(0,l.Z)(i.label,U&&i.labelSmall)},y),M)})),V=(0,i.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=(0,I.U1)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:(0,I._4)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:(0,I._4)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:(0,I._4)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:(0,I._4)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:(0,I._4)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:(0,I._4)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,I.U1)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,I.U1)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,I.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,I.U1)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:(0,I.U1)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:(0,I.U1)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:(0,I.U1)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:(0,I.U1)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(L),A=a(5340),U=function(e){var t=e.frontmatter,a=z();return o.createElement(N,{className:a.cardActionArea,component:A.Z,to:t.slug,disableTouchRipple:!0,disableRipple:!0},o.createElement(Z,{className:a.card,elevation:0},o.createElement("div",{className:a.content},o.createElement(E,null,o.createElement(w.Z,{gutterBottom:!0,variant:"h5"},t.title),o.createElement(w.Z,{gutterBottom:!0,variant:"body2",color:"textSecondary"},t.description),t.tags.map((function(e){return o.createElement(V,{className:a.chip,label:e})}))))))},z=(0,R.Z)((function(e){var t;return{cardActionArea:{width:680,margin:"auto"},card:{display:"flex"},content:(t={flex:1},t[e.breakpoints.up("md")]={margin:e.spacing(1)},t),chip:{margin:e.spacing(.5)}}})),D=function(e){var t=e.data;return o.createElement(h.Z,null,o.createElement(y.Z,null),o.createElement(d,null,t.allMarkdownRemark.edges.map((function(e){var t=e.node.frontmatter;return o.createElement(v,{key:t.slug,disableGutters:!0},o.createElement(U,{frontmatter:t}))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-92535b571799040f4a63.js.map