
import create from "zustand";

interface CountState{
  count:number;
  increseCount:()=>void;
  resetCount:()=>void;
}

export const useCountStore = create<CountState>((set)=>({
  count:0,
  increseCount:()=>set((state)=>({count:state.count+1})),
  resetCount:()=>set({count:0}),
}))