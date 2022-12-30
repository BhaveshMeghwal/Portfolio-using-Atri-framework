import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div2 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Link as Link2 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex51Cb, useFlex50Cb, useDiv96Cb, useDiv106Cb, useFlex58Cb, useDiv111Cb, useDiv112Cb, useFlex55Cb, useDiv103Cb, useDiv104Cb, useFlex54Cb, useDiv101Cb, useDiv102Cb, useFlex56Cb, useDiv107Cb, useDiv108Cb, useFlex57Cb, useDiv109Cb, useDiv110Cb, useDiv116Cb, useFlex62Cb, useDiv114Cb, useFlex59Cb, useFlex60Cb, useFlex61Cb, useDiv115Cb, useLink32Cb, useLink33Cb, useLink34Cb, useLink35Cb, useLink36Cb, useTextBox155Cb, useTextBox168Cb, useTextBox169Cb, useImage39Cb, useImage36Cb, useTextBox162Cb, useTextBox163Cb, useImage35Cb, useTextBox160Cb, useTextBox161Cb, useTextBox164Cb, useTextBox165Cb, useImage37Cb, useTextBox166Cb, useTextBox167Cb, useImage38Cb, useTextBox173Cb, useTextBox174Cb, useTextBox170Cb, useTextBox171Cb, useLink39Cb, useLink40Cb, useLink41Cb, useLink42Cb, useLink43Cb, useLink44Cb, useLink45Cb, useLink46Cb, useLink47Cb, useTextBox172Cb } from "../page-cbs/projects";
import "../page-css/projects.css";
import "../custom/projects";

export default function Projects() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex51Props = useStore((state)=>state["projects"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["projects"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Flex50Props = useStore((state)=>state["projects"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["projects"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Div96Props = useStore((state)=>state["projects"]["Div96"]);
const Div96IoProps = useIoStore((state)=>state["projects"]["Div96"]);
const Div96Cb = useDiv96Cb()
const Div106Props = useStore((state)=>state["projects"]["Div106"]);
const Div106IoProps = useIoStore((state)=>state["projects"]["Div106"]);
const Div106Cb = useDiv106Cb()
const Flex58Props = useStore((state)=>state["projects"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["projects"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Div111Props = useStore((state)=>state["projects"]["Div111"]);
const Div111IoProps = useIoStore((state)=>state["projects"]["Div111"]);
const Div111Cb = useDiv111Cb()
const Div112Props = useStore((state)=>state["projects"]["Div112"]);
const Div112IoProps = useIoStore((state)=>state["projects"]["Div112"]);
const Div112Cb = useDiv112Cb()
const Flex55Props = useStore((state)=>state["projects"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["projects"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Div103Props = useStore((state)=>state["projects"]["Div103"]);
const Div103IoProps = useIoStore((state)=>state["projects"]["Div103"]);
const Div103Cb = useDiv103Cb()
const Div104Props = useStore((state)=>state["projects"]["Div104"]);
const Div104IoProps = useIoStore((state)=>state["projects"]["Div104"]);
const Div104Cb = useDiv104Cb()
const Flex54Props = useStore((state)=>state["projects"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["projects"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Div101Props = useStore((state)=>state["projects"]["Div101"]);
const Div101IoProps = useIoStore((state)=>state["projects"]["Div101"]);
const Div101Cb = useDiv101Cb()
const Div102Props = useStore((state)=>state["projects"]["Div102"]);
const Div102IoProps = useIoStore((state)=>state["projects"]["Div102"]);
const Div102Cb = useDiv102Cb()
const Flex56Props = useStore((state)=>state["projects"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["projects"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Div107Props = useStore((state)=>state["projects"]["Div107"]);
const Div107IoProps = useIoStore((state)=>state["projects"]["Div107"]);
const Div107Cb = useDiv107Cb()
const Div108Props = useStore((state)=>state["projects"]["Div108"]);
const Div108IoProps = useIoStore((state)=>state["projects"]["Div108"]);
const Div108Cb = useDiv108Cb()
const Flex57Props = useStore((state)=>state["projects"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["projects"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Div109Props = useStore((state)=>state["projects"]["Div109"]);
const Div109IoProps = useIoStore((state)=>state["projects"]["Div109"]);
const Div109Cb = useDiv109Cb()
const Div110Props = useStore((state)=>state["projects"]["Div110"]);
const Div110IoProps = useIoStore((state)=>state["projects"]["Div110"]);
const Div110Cb = useDiv110Cb()
const Div116Props = useStore((state)=>state["projects"]["Div116"]);
const Div116IoProps = useIoStore((state)=>state["projects"]["Div116"]);
const Div116Cb = useDiv116Cb()
const Flex62Props = useStore((state)=>state["projects"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["projects"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Div114Props = useStore((state)=>state["projects"]["Div114"]);
const Div114IoProps = useIoStore((state)=>state["projects"]["Div114"]);
const Div114Cb = useDiv114Cb()
const Flex59Props = useStore((state)=>state["projects"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["projects"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex60Props = useStore((state)=>state["projects"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["projects"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex61Props = useStore((state)=>state["projects"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["projects"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Div115Props = useStore((state)=>state["projects"]["Div115"]);
const Div115IoProps = useIoStore((state)=>state["projects"]["Div115"]);
const Div115Cb = useDiv115Cb()
const Link32Props = useStore((state)=>state["projects"]["Link32"]);
const Link32IoProps = useIoStore((state)=>state["projects"]["Link32"]);
const Link32Cb = useLink32Cb()
const Link33Props = useStore((state)=>state["projects"]["Link33"]);
const Link33IoProps = useIoStore((state)=>state["projects"]["Link33"]);
const Link33Cb = useLink33Cb()
const Link34Props = useStore((state)=>state["projects"]["Link34"]);
const Link34IoProps = useIoStore((state)=>state["projects"]["Link34"]);
const Link34Cb = useLink34Cb()
const Link35Props = useStore((state)=>state["projects"]["Link35"]);
const Link35IoProps = useIoStore((state)=>state["projects"]["Link35"]);
const Link35Cb = useLink35Cb()
const Link36Props = useStore((state)=>state["projects"]["Link36"]);
const Link36IoProps = useIoStore((state)=>state["projects"]["Link36"]);
const Link36Cb = useLink36Cb()
const TextBox155Props = useStore((state)=>state["projects"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["projects"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const TextBox168Props = useStore((state)=>state["projects"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["projects"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["projects"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["projects"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const Image39Props = useStore((state)=>state["projects"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["projects"]["Image39"]);
const Image39Cb = useImage39Cb()
const Image36Props = useStore((state)=>state["projects"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["projects"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox162Props = useStore((state)=>state["projects"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["projects"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox163Props = useStore((state)=>state["projects"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["projects"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const Image35Props = useStore((state)=>state["projects"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["projects"]["Image35"]);
const Image35Cb = useImage35Cb()
const TextBox160Props = useStore((state)=>state["projects"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["projects"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const TextBox161Props = useStore((state)=>state["projects"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["projects"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox164Props = useStore((state)=>state["projects"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["projects"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const TextBox165Props = useStore((state)=>state["projects"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["projects"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const Image37Props = useStore((state)=>state["projects"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["projects"]["Image37"]);
const Image37Cb = useImage37Cb()
const TextBox166Props = useStore((state)=>state["projects"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["projects"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox167Props = useStore((state)=>state["projects"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["projects"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const Image38Props = useStore((state)=>state["projects"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["projects"]["Image38"]);
const Image38Cb = useImage38Cb()
const TextBox173Props = useStore((state)=>state["projects"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["projects"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const TextBox174Props = useStore((state)=>state["projects"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["projects"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const TextBox170Props = useStore((state)=>state["projects"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["projects"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox171Props = useStore((state)=>state["projects"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["projects"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const Link39Props = useStore((state)=>state["projects"]["Link39"]);
const Link39IoProps = useIoStore((state)=>state["projects"]["Link39"]);
const Link39Cb = useLink39Cb()
const Link40Props = useStore((state)=>state["projects"]["Link40"]);
const Link40IoProps = useIoStore((state)=>state["projects"]["Link40"]);
const Link40Cb = useLink40Cb()
const Link41Props = useStore((state)=>state["projects"]["Link41"]);
const Link41IoProps = useIoStore((state)=>state["projects"]["Link41"]);
const Link41Cb = useLink41Cb()
const Link42Props = useStore((state)=>state["projects"]["Link42"]);
const Link42IoProps = useIoStore((state)=>state["projects"]["Link42"]);
const Link42Cb = useLink42Cb()
const Link43Props = useStore((state)=>state["projects"]["Link43"]);
const Link43IoProps = useIoStore((state)=>state["projects"]["Link43"]);
const Link43Cb = useLink43Cb()
const Link44Props = useStore((state)=>state["projects"]["Link44"]);
const Link44IoProps = useIoStore((state)=>state["projects"]["Link44"]);
const Link44Cb = useLink44Cb()
const Link45Props = useStore((state)=>state["projects"]["Link45"]);
const Link45IoProps = useIoStore((state)=>state["projects"]["Link45"]);
const Link45Cb = useLink45Cb()
const Link46Props = useStore((state)=>state["projects"]["Link46"]);
const Link46IoProps = useIoStore((state)=>state["projects"]["Link46"]);
const Link46Cb = useLink46Cb()
const Link47Props = useStore((state)=>state["projects"]["Link47"]);
const Link47IoProps = useIoStore((state)=>state["projects"]["Link47"]);
const Link47Cb = useLink47Cb()
const TextBox172Props = useStore((state)=>state["projects"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["projects"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()

  return (<>
  <Flex2 className="p-projects Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<Div2 className="p-projects Div96 bpt" {...Div96Props} {...Div96Cb} {...Div96IoProps}>
<TextBox2 className="p-projects TextBox155 bpt" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
</Div2>
<Flex2 className="p-projects Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<Link2 className="p-projects Link35 bpt" {...Link35Props} {...Link35Cb} {...Link35IoProps}/>
<Link2 className="p-projects Link33 bpt" {...Link33Props} {...Link33Cb} {...Link33IoProps}/>
<Link2 className="p-projects Link34 bpt" {...Link34Props} {...Link34Cb} {...Link34IoProps}/>
<Link2 className="p-projects Link36 bpt" {...Link36Props} {...Link36Cb} {...Link36IoProps}/>
<Link2 className="p-projects Link32 bpt" {...Link32Props} {...Link32Cb} {...Link32IoProps}/>
</Flex2>
</Flex2>
<Div2 className="p-projects Div106 bpt" {...Div106Props} {...Div106Cb} {...Div106IoProps}>
<Flex2 className="p-projects Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<Div2 className="p-projects Div112 bpt" {...Div112Props} {...Div112Cb} {...Div112IoProps}>
<Image2 className="p-projects Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
</Div2>
<Div2 className="p-projects Div111 bpt" {...Div111Props} {...Div111Cb} {...Div111IoProps}>
<TextBox2 className="p-projects TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<TextBox2 className="p-projects TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
</Div2>
</Flex2>
<Flex2 className="p-projects Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<Div2 className="p-projects Div110 bpt" {...Div110Props} {...Div110Cb} {...Div110IoProps}>
<Image2 className="p-projects Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
</Div2>
<Div2 className="p-projects Div109 bpt" {...Div109Props} {...Div109Cb} {...Div109IoProps}>
<TextBox2 className="p-projects TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
<TextBox2 className="p-projects TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
</Div2>
</Flex2>
<Flex2 className="p-projects Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Div2 className="p-projects Div108 bpt" {...Div108Props} {...Div108Cb} {...Div108IoProps}>
<Image2 className="p-projects Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
</Div2>
<Div2 className="p-projects Div107 bpt" {...Div107Props} {...Div107Cb} {...Div107IoProps}>
<TextBox2 className="p-projects TextBox165 bpt" {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
<TextBox2 className="p-projects TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
</Div2>
</Flex2>
<Flex2 className="p-projects Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Div2 className="p-projects Div101 bpt" {...Div101Props} {...Div101Cb} {...Div101IoProps}>
<Image2 className="p-projects Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
</Div2>
<Div2 className="p-projects Div102 bpt" {...Div102Props} {...Div102Cb} {...Div102IoProps}>
<TextBox2 className="p-projects TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
<TextBox2 className="p-projects TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
</Div2>
</Flex2>
<Flex2 className="p-projects Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Div2 className="p-projects Div103 bpt" {...Div103Props} {...Div103Cb} {...Div103IoProps}>
<Image2 className="p-projects Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
</Div2>
<Div2 className="p-projects Div104 bpt" {...Div104Props} {...Div104Cb} {...Div104IoProps}>
<TextBox2 className="p-projects TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<TextBox2 className="p-projects TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
</Div2>
</Flex2>
</Div2>
<Div2 className="p-projects Div116 bpt" {...Div116Props} {...Div116Cb} {...Div116IoProps}>
<TextBox2 className="p-projects TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
<Div2 className="p-projects Div115 bpt" {...Div115Props} {...Div115Cb} {...Div115IoProps}>
<TextBox2 className="p-projects TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
</Div2>
<Flex2 className="p-projects Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Div2 className="p-projects Div114 bpt" {...Div114Props} {...Div114Cb} {...Div114IoProps}>
<TextBox2 className="p-projects TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
<TextBox2 className="p-projects TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
</Div2>
<Flex2 className="p-projects Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<Link2 className="p-projects Link39 bpt" {...Link39Props} {...Link39Cb} {...Link39IoProps}/>
<Link2 className="p-projects Link40 bpt" {...Link40Props} {...Link40Cb} {...Link40IoProps}/>
<Link2 className="p-projects Link41 bpt" {...Link41Props} {...Link41Cb} {...Link41IoProps}/>
</Flex2>
<Flex2 className="p-projects Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<Link2 className="p-projects Link45 bpt" {...Link45Props} {...Link45Cb} {...Link45IoProps}/>
<Link2 className="p-projects Link46 bpt" {...Link46Props} {...Link46Cb} {...Link46IoProps}/>
<Link2 className="p-projects Link47 bpt" {...Link47Props} {...Link47Cb} {...Link47IoProps}/>
</Flex2>
<Flex2 className="p-projects Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Link2 className="p-projects Link42 bpt" {...Link42Props} {...Link42Cb} {...Link42IoProps}/>
<Link2 className="p-projects Link43 bpt" {...Link43Props} {...Link43Cb} {...Link43IoProps}/>
<Link2 className="p-projects Link44 bpt" {...Link44Props} {...Link44Cb} {...Link44IoProps}/>
</Flex2>
</Flex2>
<TextBox2 className="p-projects TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
</Div2>
  </>);
}
