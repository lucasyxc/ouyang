import{_ as H,r as d,o as Q,j as X,k as Y,a as Z,c as a,w as s,C as ee,M as ae,l as u,m as P,e as le,i as te,h as ne,b as w,n as se,p as oe,B as re,g as B,q as ue,s as ie,v as de,x as ce,y as pe}from"./index-CB7tuZ5q.js";import{d as y}from"./dealer-Cl3Hv7VQ.js";import"./request-BsIQN7sp.js";const _e={class:"dealer-container"},me=["onClick"],ve={__name:"index",setup(fe){const F=X(),R=Y(),L=d([]),x=d(!1),_=d(!1),k=d("新增客户"),C=d(!1),t=d({}),U=d(null),M=d(""),m=d({current:1,pageSize:10,total:0}),D=[{title:"公司名称",dataIndex:"name",key:"name",width:200},{title:"联系人",dataIndex:"contact_person",key:"contact_person",width:120},{title:"联系电话",dataIndex:"contact_phone",key:"contact_phone",width:150},{title:"地址",dataIndex:"address",key:"address",ellipsis:!0},{title:"营业执照号",dataIndex:"license_number",key:"license_number",width:180},{title:"操作",key:"action",width:150,fixed:"right",slots:{customRender:"action"}}],J={name:[{required:!1,message:"请输入公司名称",trigger:"blur"},{min:2,max:100,message:"长度在 2 到 100 个字符",trigger:"blur"}],contact_person:[{required:!0,message:"请输入联系人",trigger:"blur"}],contact_phone:[{required:!0,message:"请输入联系电话",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"请输入正确的手机号码",trigger:"blur"}],license_number:[{required:!1,message:"请输入营业执照号",trigger:"blur"}],address:[{required:!0,message:"请输入地址",trigger:"blur"}],class3_license_number:[{required:!1,message:"请输入三类医疗器械经营许可证编号",trigger:"blur"}],class2_record_number:[{required:!1,message:"请输入二类医疗器械经营备案编号",trigger:"blur"}]},v=async()=>{x.value=!0;try{const n=await y.getList({page:m.value.current,pageSize:m.value.pageSize,keyword:M.value});L.value=n.data.results,m.value.total=n.data.total}catch{u.error("获取客户列表失败")}finally{x.value=!1}},G=()=>{v()},j=()=>{k.value="新增客户",t.value={},_.value=!0},V=n=>{k.value="编辑客户",t.value={...n},_.value=!0},E=async()=>{var n,e;try{await U.value.validate(),C.value=!0,t.value.id?(await y.update(t.value.id,t.value),u.success("更新客户信息成功")):(await y.create(t.value),u.success("新增客户成功")),_.value=!1,v()}catch(r){console.error("表单提交错误:",r),u.error(((e=(n=r.response)==null?void 0:n.data)==null?void 0:e.message)||"操作失败，请重试")}finally{C.value=!1}},N=async n=>{var e,r;try{await y.delete(n.id),u.success("删除客户成功"),v()}catch(f){u.error(((r=(e=f.response)==null?void 0:e.data)==null?void 0:r.message)||"删除失败，请重试")}},T=n=>{m.value.current=n.current,m.value.pageSize=n.pageSize,v()},$=()=>{var n;(n=U.value)==null||n.resetFields(),t.value={}},A=()=>{_.value=!1,$()},I=(n,e)=>{const r=n.type==="image/jpeg",f=n.type==="application/pdf";if(e==="class3"){if(!r)return u.error("三类许可证仅支持JPG格式"),!1;if(!(n.size/1024/1024<1.8))return u.error("文件大小不能超过1.8MB"),!1;if(n.size/1024/1024>1.7)return new Promise(b=>{const p=new Image;p.src=URL.createObjectURL(n),p.onload=()=>{const c=document.createElement("canvas"),h=c.getContext("2d"),i=1200,o=i/p.width;c.width=i,c.height=p.height*o,h.drawImage(p,0,0,c.width,c.height),c.toBlob(q=>{b(new File([q],n.name,{type:"image/jpeg",lastModified:Date.now()}))},"image/jpeg",.8)}})}if(e==="class2"){if(!r&&!f)return u.error("二类备案凭证仅支持JPG和PDF格式"),!1;if(!(n.size/1024/1024<5))return u.error("文件大小不能超过5MB"),!1}return!0};return Q(()=>{v(),F.query.modal==="add"&&(j(),R.replace({query:{}}))}),(n,e)=>{const r=oe,f=P("plus-outlined"),g=re,b=ne,p=se,c=te,h=ee,i=de,o=ie,q=ce,S=P("upload-outlined"),z=pe,O=ue,K=ae;return le(),Z("div",_e,[a(h,{title:"客户管理"},{extra:s(()=>[a(b,null,{default:s(()=>[a(r,{value:M.value,"onUpdate:value":e[0]||(e[0]=l=>M.value=l),placeholder:"搜索客户",style:{width:"200px"},onSearch:G},null,8,["value"]),a(g,{type:"primary",onClick:j},{icon:s(()=>[a(f)]),default:s(()=>[e[11]||(e[11]=B(" 新增客户 "))]),_:1})]),_:1})]),default:s(()=>[a(c,{columns:D,"data-source":L.value,loading:x.value,pagination:m.value,scroll:{x:1300},"row-key":"id",onChange:T},{action:s(({record:l})=>[a(b,null,{default:s(()=>[w("a",{onClick:W=>V(l)},"编辑",8,me),a(p,{title:"确定删除该客户吗？",onConfirm:W=>N(l)},{default:s(()=>e[12]||(e[12]=[w("a",null,"删除",-1)])),_:2},1032,["onConfirm"])]),_:2},1024)]),_:1},8,["data-source","loading","pagination"])]),_:1}),a(K,{visible:_.value,"onUpdate:visible":e[10]||(e[10]=l=>_.value=l),title:k.value,"confirm-loading":C.value,onOk:E,onCancel:A},{default:s(()=>[a(O,{ref_key:"formRef",ref:U,model:t.value,rules:J,"label-col":{span:6},"wrapper-col":{span:16}},{default:s(()=>[a(o,{label:"公司名称",name:"name"},{default:s(()=>[a(i,{value:t.value.name,"onUpdate:value":e[1]||(e[1]=l=>t.value.name=l)},null,8,["value"])]),_:1}),a(o,{label:"联系人",name:"contact_person"},{default:s(()=>[a(i,{value:t.value.contact_person,"onUpdate:value":e[2]||(e[2]=l=>t.value.contact_person=l)},null,8,["value"])]),_:1}),a(o,{label:"联系电话",name:"contact_phone"},{default:s(()=>[a(i,{value:t.value.contact_phone,"onUpdate:value":e[3]||(e[3]=l=>t.value.contact_phone=l)},null,8,["value"])]),_:1}),a(o,{label:"营业执照号",name:"license_number"},{default:s(()=>[a(i,{value:t.value.license_number,"onUpdate:value":e[4]||(e[4]=l=>t.value.license_number=l)},null,8,["value"])]),_:1}),a(o,{label:"地址",name:"address"},{default:s(()=>[a(q,{value:t.value.address,"onUpdate:value":e[5]||(e[5]=l=>t.value.address=l),rows:2},null,8,["value"])]),_:1}),a(o,{label:"三类医疗器械经营许可证编号",name:"class3_license_number","label-col":{span:24}},{default:s(()=>[a(i,{value:t.value.class3_license_number,"onUpdate:value":e[6]||(e[6]=l=>t.value.class3_license_number=l)},null,8,["value"])]),_:1}),a(o,{label:"二类医疗器械经营备案编号",name:"class2_record_number","label-col":{span:24}},{default:s(()=>[a(i,{value:t.value.class2_record_number,"onUpdate:value":e[7]||(e[7]=l=>t.value.class2_record_number=l)},null,8,["value"])]),_:1}),a(o,{label:"三类许可证文件",name:"class3_license_file","label-col":{span:24}},{default:s(()=>[a(z,{"file-list":t.value.class3_license_file,"onUpdate:fileList":e[8]||(e[8]=l=>t.value.class3_license_file=l),"before-upload":l=>I(l,"class3"),"max-count":1,accept:".jpg,.jpeg"},{default:s(()=>[a(g,null,{default:s(()=>[a(S),e[13]||(e[13]=B(" 上传文件 "))]),_:1})]),_:1},8,["file-list","before-upload"]),e[14]||(e[14]=w("span",{class:"upload-tip"},"仅支持JPG格式，最大1.8MB",-1))]),_:1}),a(o,{label:"二类备案凭证文件",name:"class2_record_file","label-col":{span:24}},{default:s(()=>[a(z,{"file-list":t.value.class2_record_file,"onUpdate:fileList":e[9]||(e[9]=l=>t.value.class2_record_file=l),"before-upload":l=>I(l,"class2"),"max-count":1,accept:".jpg,.jpeg,.pdf"},{default:s(()=>[a(g,null,{default:s(()=>[a(S),e[15]||(e[15]=B(" 上传文件 "))]),_:1})]),_:1},8,["file-list","before-upload"]),e[16]||(e[16]=w("span",{class:"upload-tip"},"支持JPG、PDF格式，最大5MB",-1))]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title","confirm-loading"])])}}},ye=H(ve,[["__scopeId","data-v-fcc2f41b"]]);export{ye as default};
