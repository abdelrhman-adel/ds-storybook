import{j as r}from"./index-Cd-xqqnJ.js";import{A as i,C as s,a as d,b as o,c,d as l,e as p,f as t,g as m}from"./CardTitle-EfNWnJtR.js";import"./index-DVXBtNgz.js";import"./index-DPx8FGzu.js";const P={title:"Molecules/Card/Action",component:i,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["white","grey","sand","blue","darkBlue"],table:{defaultValue:{summary:"white"},type:{summary:"color variant"}}}},tags:["autodocs"],render:e=>r.jsxs(i,{...e,children:[r.jsx(s,{src:"https://picsum.photos/1600/900"}),r.jsxs(d,{children:[r.jsx(o,{children:"Card Title"}),r.jsx(c,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"})]})]})},a={args:{variant:"blue"}},n={render:e=>r.jsxs("div",{className:"flex space-between gap-6",children:[r.jsxs(i,{...e,children:[r.jsx(s,{src:"https://picsum.photos/500/300"}),r.jsxs(d,{children:[r.jsx(o,{children:"Card Title"}),r.jsx(c,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"})]}),r.jsx(l,{children:r.jsxs(p,{children:[r.jsx(t,{children:"Starting at"}),r.jsx(m,{children:"€199"}),r.jsx(t,{children:"Description"})]})})]}),r.jsxs(i,{...e,variant:"grey",children:[r.jsx(s,{src:"https://picsum.photos/500/300"}),r.jsxs(d,{children:[r.jsx(o,{children:"Card Title"}),r.jsx(c,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"})]})]}),r.jsxs(i,{...e,variant:"darkBlue",children:[r.jsx(s,{src:"https://picsum.photos/500/300"}),r.jsxs(d,{children:[r.jsx(o,{children:"Card Title"}),r.jsx(c,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"})]}),r.jsx(l,{children:r.jsxs(p,{children:[r.jsx(t,{children:"Starting at"}),r.jsx(m,{children:"€199"}),r.jsx(t,{children:"Description"})]})})]})]})};var C,u,h;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'blue'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,x,j;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div className="flex space-between gap-6">
      <ActionCard {...args}>
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
        </CardFooter>
      </ActionCard>
      <ActionCard {...args} variant="grey">
        <CardMedia src="https://picsum.photos/500/300" />
        <CardContent>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </CardDescription>
        </CardContent>
      </ActionCard>
      <ActionCard {...args} variant="darkBlue">
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
        </CardFooter>
      </ActionCard>
    </div>
}`,...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const v=["Primary","Row"];export{a as Primary,n as Row,v as __namedExportsOrder,P as default};
