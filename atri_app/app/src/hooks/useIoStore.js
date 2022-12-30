import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "Services": {},
  "projects": {},
  "blog": {},
  "contact": {}
}});

export default useIoStore;
