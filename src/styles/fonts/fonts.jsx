import localFont from "next/font/local"

const chesnaGrotesk = localFont({
  src: [
    {
      path:'./chesnagrotesk-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path:'./chesnagrotesk-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path:'./chesnagrotesk-regularitalic.otf',
      weight: '400',
      style: 'italic',
    }
  ]
});

export default chesnaGrotesk;
