import{r as _}from"./request-C7sc0_J1.js";import{p as G}from"./product-CiH2I8No.js";import{_ as j,r as s,o as z,a as H,c as a,w as l,h as J,g as Q,b as q,D as W,T as X,e as I,t as Y,l as Z,B as ee,u as ae,P as te,C as ne,n as le,p as oe,x as ue,q as re,y as se,G as ie,M as de,v as i,i as ce}from"./index-BmxR4WCw.js";const p={getList(u){return _.get("/api/inventory/",{params:u})},create(u){return _.post("/api/inventory/",u)},update(u,c){return _.put(`/api/inventory/${u}/`,c)},delete(u){return _.delete(`/api/inventory/${u}/`)}},_e={class:"inventory-container"},pe=["onClick"],ve={__name:"index",setup(u){const c=s([]),v=s(!1),b=s([]),d=s(!1),m=s("新增库存"),f=s(!1),n=s({}),w=s(null),U=[{title:"产品名称",dataIndex:["device","name"],key:"device_name",width:200},{title:"批号",dataIndex:"batch_number",key:"batch_number",width:150},{title:"序列号",dataIndex:"serial_number",key:"serial_number",width:150},{title:"数量",dataIndex:"quantity",key:"quantity",width:100},{title:"库位",dataIndex:"location",key:"location",width:150},{title:"状态",dataIndex:"status",key:"status",width:100,slots:{customRender:"status"}},{title:"生产日期",dataIndex:"production_date",key:"production_date",width:120},{title:"有效期至",dataIndex:"expiry_date",key:"expiry_date",width:120},{title:"操作",key:"action",width:150,fixed:"right",slots:{customRender:"action"}}],C={device:[{required:!0,message:"请选择产品",trigger:"change"}],batch_number:[{required:!0,message:"请输入批号",trigger:"blur"}],quantity:[{required:!0,message:"请输入数量",trigger:"blur"}],location:[{required:!0,message:"请输入库位",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"change"}],production_date:[{required:!0,message:"请选择生产日期",trigger:"change"}],expiry_date:[{required:!0,message:"请选择有效期",trigger:"change"}]},S=[{label:"合格",value:"合格"},{label:"不合格",value:"不合格"},{label:"待验",value:"待验"}],y=async()=>{v.value=!0;try{const o=await p.getList();c.value=o.data}catch{i.error("获取库存列表失败")}finally{v.value=!1}},D=async()=>{try{const o=await G.getList();b.value=o.data.map(e=>({label:e.name,value:e.id}))}catch{i.error("获取产品列表失败")}},B=()=>{m.value="新增库存",n.value={status:"待验"},d.value=!0},$=o=>{m.value="编辑库存",n.value={...o},d.value=!0},L=async()=>{try{await w.value.validate(),f.value=!0,n.value.id?(await p.update(n.value.id,n.value),i.success("更新成功")):(await p.create(n.value),i.success("创建成功")),d.value=!1,y()}catch(o){console.error("表单提交错误:",o),i.error("操作失败")}finally{f.value=!1}},P=async o=>{try{await p.delete(o.id),i.success("删除成功"),y()}catch{i.error("删除失败")}};return z(()=>{y(),D()}),(o,e)=>{const R=Z,T=ee,x=Q,V=X,A=W,M=J,N=ne,h=ue,r=oe,g=re,O=se,k=ie,E=le,F=de;return ce(),H("div",_e,[a(N,{title:"库存管理"},{extra:l(()=>[a(x,null,{default:l(()=>[a(R,{value:o.searchKeyword,"onUpdate:value":e[0]||(e[0]=t=>o.searchKeyword=t),placeholder:"搜索库存",style:{width:"200px"},onSearch:o.onSearch},null,8,["value","onSearch"]),a(T,{type:"primary",onClick:B},{icon:l(()=>[a(ae(te))]),default:l(()=>[e[10]||(e[10]=I(" 新增库存 "))]),_:1})]),_:1})]),default:l(()=>[a(M,{columns:U,"data-source":c.value,loading:v.value,scroll:{x:1500},"row-key":"id"},{status:l(({text:t})=>[a(V,{color:t==="合格"?"success":t==="不合格"?"error":"warning"},{default:l(()=>[I(Y(t),1)]),_:2},1032,["color"])]),action:l(({record:t})=>[a(x,null,{default:l(()=>[q("a",{onClick:K=>$(t)},"编辑",8,pe),a(A,{title:"确定删除该库存记录吗？",onConfirm:K=>P(t)},{default:l(()=>e[11]||(e[11]=[q("a",null,"删除",-1)])),_:2},1032,["onConfirm"])]),_:2},1024)]),_:1},8,["data-source","loading"])]),_:1}),a(F,{visible:d.value,"onUpdate:visible":e[9]||(e[9]=t=>d.value=t),title:m.value,"confirm-loading":f.value,onOk:L,width:"700px"},{default:l(()=>[a(E,{ref_key:"formRef",ref:w,model:n.value,rules:C,"label-col":{span:6},"wrapper-col":{span:16}},{default:l(()=>[a(r,{label:"产品",name:"device"},{default:l(()=>[a(h,{value:n.value.device,"onUpdate:value":e[1]||(e[1]=t=>n.value.device=t),options:b.value,placeholder:"请选择产品"},null,8,["value","options"])]),_:1}),a(r,{label:"批号",name:"batch_number"},{default:l(()=>[a(g,{value:n.value.batch_number,"onUpdate:value":e[2]||(e[2]=t=>n.value.batch_number=t)},null,8,["value"])]),_:1}),a(r,{label:"序列号",name:"serial_number"},{default:l(()=>[a(g,{value:n.value.serial_number,"onUpdate:value":e[3]||(e[3]=t=>n.value.serial_number=t)},null,8,["value"])]),_:1}),a(r,{label:"数量",name:"quantity"},{default:l(()=>[a(O,{value:n.value.quantity,"onUpdate:value":e[4]||(e[4]=t=>n.value.quantity=t),min:0},null,8,["value"])]),_:1}),a(r,{label:"库位",name:"location"},{default:l(()=>[a(g,{value:n.value.location,"onUpdate:value":e[5]||(e[5]=t=>n.value.location=t)},null,8,["value"])]),_:1}),a(r,{label:"状态",name:"status"},{default:l(()=>[a(h,{value:n.value.status,"onUpdate:value":e[6]||(e[6]=t=>n.value.status=t),options:S},null,8,["value"])]),_:1}),a(r,{label:"生产日期",name:"production_date"},{default:l(()=>[a(k,{value:n.value.production_date,"onUpdate:value":e[7]||(e[7]=t=>n.value.production_date=t),style:{width:"100%"}},null,8,["value"])]),_:1}),a(r,{label:"有效期至",name:"expiry_date"},{default:l(()=>[a(k,{value:n.value.expiry_date,"onUpdate:value":e[8]||(e[8]=t=>n.value.expiry_date=t),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title","confirm-loading"])])}}},ge=j(ve,[["__scopeId","data-v-23e105d3"]]);export{ge as default};
