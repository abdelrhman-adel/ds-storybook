import{j as r}from"./index-Cd-xqqnJ.js";import{M as d,C as o,a as c,b as l,c as u,d as m,e as p,f as a,g as C}from"./CardTitle-EfNWnJtR.js";import{B as t}from"./Button-DKioIsLR.js";import"./index-DVXBtNgz.js";import"./index-DPx8FGzu.js";const n=e=>r.jsx("div",{className:"flex flex-col items-stretch gap-4",...e});n.displayName="CardButtons";n.__docgenInfo={description:"",methods:[],displayName:"CardButtons"};const E={title:"Molecules/Card/Media",component:d,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["white","grey","sand","blue","darkBlue"],table:{defaultValue:{summary:"white"},type:{summary:"color variant"}}}},tags:["autodocs"],render:e=>r.jsxs(d,{...e,children:[r.jsx(o,{src:"https://picsum.photos/1600/900"}),r.jsxs(c,{children:[r.jsx(l,{children:"Card Title"}),r.jsx(u,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"})]}),r.jsx(m,{children:r.jsxs(n,{children:[r.jsx(t,{children:"Button"}),r.jsx(t,{variant:e.variant==="white"?"outline":"secondary",children:"Button"})]})})]})},s={args:{variant:"sand"}},i={render:e=>r.jsxs("div",{className:"flex space-between gap-6",children:[r.jsxs(d,{...e,children:[r.jsx(o,{src:"https://picsum.photos/500/300"}),r.jsxs(c,{children:[r.jsx(l,{children:"Card Title"}),r.jsx(u,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"})]}),r.jsxs(m,{children:[r.jsxs(p,{children:[r.jsx(a,{children:"Starting at"}),r.jsx(C,{children:"€199"}),r.jsx(a,{children:"Description"})]}),r.jsxs(n,{children:[r.jsx(t,{children:"Button"}),r.jsx(t,{variant:e.variant==="white"?"outline":"secondary",children:"Button"})]})]})]}),r.jsxs(d,{...e,variant:"sand",children:[r.jsx(o,{src:"https://picsum.photos/500/300"}),r.jsxs(c,{children:[r.jsx(l,{children:"Card Title"}),r.jsx(u,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"})]}),r.jsxs(m,{children:[r.jsxs(p,{children:[r.jsx(a,{children:"Starting at"}),r.jsx(C,{children:"€199"}),r.jsx(a,{children:"Description"})]}),r.jsxs(n,{children:[r.jsx(t,{children:"Button"}),r.jsx(t,{variant:"secondary",children:"Button"})]})]})]})]})};var h,x,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'sand'
  }
}`,...(j=(x=s.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var g,B,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div className="flex space-between gap-6">
      <MediaCard {...args}>
        <CardMedia src="https://picsum.photos/500/300" />
        <CardContent>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </CardDescription>
        </CardContent>
        <CardFooter>
          <CardPricing>
            <CardEyebrow>Starting at</CardEyebrow>
            <CardPrice>€199</CardPrice>
            <CardEyebrow>Description</CardEyebrow>
          </CardPricing>
          <CardButtons>
            <Button>Button</Button>
            <Button variant={args.variant === 'white' ? 'outline' : 'secondary'}>
              Button
            </Button>
          </CardButtons>
        </CardFooter>
      </MediaCard>
      <MediaCard {...args} variant="sand">
        <CardMedia src="https://picsum.photos/500/300" />
        <CardContent>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </CardDescription>
        </CardContent>
        <CardFooter>
          <CardPricing>
            <CardEyebrow>Starting at</CardEyebrow>
            <CardPrice>€199</CardPrice>
            <CardEyebrow>Description</CardEyebrow>
          </CardPricing>
          <CardButtons>
            <Button>Button</Button>
            <Button variant="secondary">Button</Button>
          </CardButtons>
        </CardFooter>
      </MediaCard>
    </div>
}`,...(y=(B=i.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};const M=["Primary","Row"];export{s as Primary,i as Row,M as __namedExportsOrder,E as default};
