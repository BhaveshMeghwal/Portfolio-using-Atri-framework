import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div3 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Link as Link3 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex64Cb, useFlex63Cb, useDiv117Cb, useDiv126Cb, useDiv137Cb, useFlex70Cb, useDiv127Cb, useDiv128Cb, useFlex71Cb, useDiv129Cb, useDiv130Cb, useFlex72Cb, useDiv131Cb, useDiv132Cb, useFlex73Cb, useDiv133Cb, useDiv134Cb, useFlex74Cb, useDiv135Cb, useDiv136Cb, useDiv140Cb, useFlex78Cb, useDiv138Cb, useFlex75Cb, useFlex76Cb, useFlex77Cb, useDiv139Cb, useLink48Cb, useLink49Cb, useLink50Cb, useLink51Cb, useLink52Cb, useTextBox175Cb, useTextBox184Cb, useTextBox185Cb, useButton12Cb, useImage44Cb, useTextBox186Cb, useTextBox187Cb, useButton11Cb, useImage45Cb, useTextBox188Cb, useTextBox189Cb, useButton10Cb, useImage46Cb, useTextBox190Cb, useTextBox191Cb, useButton13Cb, useImage47Cb, useImage48Cb, useButton9Cb, useTextBox192Cb, useTextBox193Cb, useTextBox197Cb, useTextBox198Cb, useTextBox194Cb, useTextBox195Cb, useLink54Cb, useLink55Cb, useLink56Cb, useLink57Cb, useLink58Cb, useLink59Cb, useLink60Cb, useLink61Cb, useLink62Cb, useTextBox196Cb } from "../page-cbs/blog";
import "../page-css/blog.css";
import "../custom/blog";

export default function Blog() {
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

  const Flex64Props = useStore((state)=>state["blog"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["blog"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex63Props = useStore((state)=>state["blog"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["blog"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Div117Props = useStore((state)=>state["blog"]["Div117"]);
const Div117IoProps = useIoStore((state)=>state["blog"]["Div117"]);
const Div117Cb = useDiv117Cb()
const Div126Props = useStore((state)=>state["blog"]["Div126"]);
const Div126IoProps = useIoStore((state)=>state["blog"]["Div126"]);
const Div126Cb = useDiv126Cb()
const Div137Props = useStore((state)=>state["blog"]["Div137"]);
const Div137IoProps = useIoStore((state)=>state["blog"]["Div137"]);
const Div137Cb = useDiv137Cb()
const Flex70Props = useStore((state)=>state["blog"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["blog"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Div127Props = useStore((state)=>state["blog"]["Div127"]);
const Div127IoProps = useIoStore((state)=>state["blog"]["Div127"]);
const Div127Cb = useDiv127Cb()
const Div128Props = useStore((state)=>state["blog"]["Div128"]);
const Div128IoProps = useIoStore((state)=>state["blog"]["Div128"]);
const Div128Cb = useDiv128Cb()
const Flex71Props = useStore((state)=>state["blog"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["blog"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Div129Props = useStore((state)=>state["blog"]["Div129"]);
const Div129IoProps = useIoStore((state)=>state["blog"]["Div129"]);
const Div129Cb = useDiv129Cb()
const Div130Props = useStore((state)=>state["blog"]["Div130"]);
const Div130IoProps = useIoStore((state)=>state["blog"]["Div130"]);
const Div130Cb = useDiv130Cb()
const Flex72Props = useStore((state)=>state["blog"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["blog"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Div131Props = useStore((state)=>state["blog"]["Div131"]);
const Div131IoProps = useIoStore((state)=>state["blog"]["Div131"]);
const Div131Cb = useDiv131Cb()
const Div132Props = useStore((state)=>state["blog"]["Div132"]);
const Div132IoProps = useIoStore((state)=>state["blog"]["Div132"]);
const Div132Cb = useDiv132Cb()
const Flex73Props = useStore((state)=>state["blog"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["blog"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Div133Props = useStore((state)=>state["blog"]["Div133"]);
const Div133IoProps = useIoStore((state)=>state["blog"]["Div133"]);
const Div133Cb = useDiv133Cb()
const Div134Props = useStore((state)=>state["blog"]["Div134"]);
const Div134IoProps = useIoStore((state)=>state["blog"]["Div134"]);
const Div134Cb = useDiv134Cb()
const Flex74Props = useStore((state)=>state["blog"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["blog"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Div135Props = useStore((state)=>state["blog"]["Div135"]);
const Div135IoProps = useIoStore((state)=>state["blog"]["Div135"]);
const Div135Cb = useDiv135Cb()
const Div136Props = useStore((state)=>state["blog"]["Div136"]);
const Div136IoProps = useIoStore((state)=>state["blog"]["Div136"]);
const Div136Cb = useDiv136Cb()
const Div140Props = useStore((state)=>state["blog"]["Div140"]);
const Div140IoProps = useIoStore((state)=>state["blog"]["Div140"]);
const Div140Cb = useDiv140Cb()
const Flex78Props = useStore((state)=>state["blog"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["blog"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Div138Props = useStore((state)=>state["blog"]["Div138"]);
const Div138IoProps = useIoStore((state)=>state["blog"]["Div138"]);
const Div138Cb = useDiv138Cb()
const Flex75Props = useStore((state)=>state["blog"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["blog"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex76Props = useStore((state)=>state["blog"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["blog"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex77Props = useStore((state)=>state["blog"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["blog"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Div139Props = useStore((state)=>state["blog"]["Div139"]);
const Div139IoProps = useIoStore((state)=>state["blog"]["Div139"]);
const Div139Cb = useDiv139Cb()
const Link48Props = useStore((state)=>state["blog"]["Link48"]);
const Link48IoProps = useIoStore((state)=>state["blog"]["Link48"]);
const Link48Cb = useLink48Cb()
const Link49Props = useStore((state)=>state["blog"]["Link49"]);
const Link49IoProps = useIoStore((state)=>state["blog"]["Link49"]);
const Link49Cb = useLink49Cb()
const Link50Props = useStore((state)=>state["blog"]["Link50"]);
const Link50IoProps = useIoStore((state)=>state["blog"]["Link50"]);
const Link50Cb = useLink50Cb()
const Link51Props = useStore((state)=>state["blog"]["Link51"]);
const Link51IoProps = useIoStore((state)=>state["blog"]["Link51"]);
const Link51Cb = useLink51Cb()
const Link52Props = useStore((state)=>state["blog"]["Link52"]);
const Link52IoProps = useIoStore((state)=>state["blog"]["Link52"]);
const Link52Cb = useLink52Cb()
const TextBox175Props = useStore((state)=>state["blog"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["blog"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const TextBox184Props = useStore((state)=>state["blog"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["blog"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()
const TextBox185Props = useStore((state)=>state["blog"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["blog"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const Button12Props = useStore((state)=>state["blog"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["blog"]["Button12"]);
const Button12Cb = useButton12Cb()
const Image44Props = useStore((state)=>state["blog"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["blog"]["Image44"]);
const Image44Cb = useImage44Cb()
const TextBox186Props = useStore((state)=>state["blog"]["TextBox186"]);
const TextBox186IoProps = useIoStore((state)=>state["blog"]["TextBox186"]);
const TextBox186Cb = useTextBox186Cb()
const TextBox187Props = useStore((state)=>state["blog"]["TextBox187"]);
const TextBox187IoProps = useIoStore((state)=>state["blog"]["TextBox187"]);
const TextBox187Cb = useTextBox187Cb()
const Button11Props = useStore((state)=>state["blog"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["blog"]["Button11"]);
const Button11Cb = useButton11Cb()
const Image45Props = useStore((state)=>state["blog"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["blog"]["Image45"]);
const Image45Cb = useImage45Cb()
const TextBox188Props = useStore((state)=>state["blog"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["blog"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const TextBox189Props = useStore((state)=>state["blog"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["blog"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const Button10Props = useStore((state)=>state["blog"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["blog"]["Button10"]);
const Button10Cb = useButton10Cb()
const Image46Props = useStore((state)=>state["blog"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["blog"]["Image46"]);
const Image46Cb = useImage46Cb()
const TextBox190Props = useStore((state)=>state["blog"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["blog"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const TextBox191Props = useStore((state)=>state["blog"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["blog"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const Button13Props = useStore((state)=>state["blog"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["blog"]["Button13"]);
const Button13Cb = useButton13Cb()
const Image47Props = useStore((state)=>state["blog"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["blog"]["Image47"]);
const Image47Cb = useImage47Cb()
const Image48Props = useStore((state)=>state["blog"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["blog"]["Image48"]);
const Image48Cb = useImage48Cb()
const Button9Props = useStore((state)=>state["blog"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["blog"]["Button9"]);
const Button9Cb = useButton9Cb()
const TextBox192Props = useStore((state)=>state["blog"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["blog"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const TextBox193Props = useStore((state)=>state["blog"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["blog"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()
const TextBox197Props = useStore((state)=>state["blog"]["TextBox197"]);
const TextBox197IoProps = useIoStore((state)=>state["blog"]["TextBox197"]);
const TextBox197Cb = useTextBox197Cb()
const TextBox198Props = useStore((state)=>state["blog"]["TextBox198"]);
const TextBox198IoProps = useIoStore((state)=>state["blog"]["TextBox198"]);
const TextBox198Cb = useTextBox198Cb()
const TextBox194Props = useStore((state)=>state["blog"]["TextBox194"]);
const TextBox194IoProps = useIoStore((state)=>state["blog"]["TextBox194"]);
const TextBox194Cb = useTextBox194Cb()
const TextBox195Props = useStore((state)=>state["blog"]["TextBox195"]);
const TextBox195IoProps = useIoStore((state)=>state["blog"]["TextBox195"]);
const TextBox195Cb = useTextBox195Cb()
const Link54Props = useStore((state)=>state["blog"]["Link54"]);
const Link54IoProps = useIoStore((state)=>state["blog"]["Link54"]);
const Link54Cb = useLink54Cb()
const Link55Props = useStore((state)=>state["blog"]["Link55"]);
const Link55IoProps = useIoStore((state)=>state["blog"]["Link55"]);
const Link55Cb = useLink55Cb()
const Link56Props = useStore((state)=>state["blog"]["Link56"]);
const Link56IoProps = useIoStore((state)=>state["blog"]["Link56"]);
const Link56Cb = useLink56Cb()
const Link57Props = useStore((state)=>state["blog"]["Link57"]);
const Link57IoProps = useIoStore((state)=>state["blog"]["Link57"]);
const Link57Cb = useLink57Cb()
const Link58Props = useStore((state)=>state["blog"]["Link58"]);
const Link58IoProps = useIoStore((state)=>state["blog"]["Link58"]);
const Link58Cb = useLink58Cb()
const Link59Props = useStore((state)=>state["blog"]["Link59"]);
const Link59IoProps = useIoStore((state)=>state["blog"]["Link59"]);
const Link59Cb = useLink59Cb()
const Link60Props = useStore((state)=>state["blog"]["Link60"]);
const Link60IoProps = useIoStore((state)=>state["blog"]["Link60"]);
const Link60Cb = useLink60Cb()
const Link61Props = useStore((state)=>state["blog"]["Link61"]);
const Link61IoProps = useIoStore((state)=>state["blog"]["Link61"]);
const Link61Cb = useLink61Cb()
const Link62Props = useStore((state)=>state["blog"]["Link62"]);
const Link62IoProps = useIoStore((state)=>state["blog"]["Link62"]);
const Link62Cb = useLink62Cb()
const TextBox196Props = useStore((state)=>state["blog"]["TextBox196"]);
const TextBox196IoProps = useIoStore((state)=>state["blog"]["TextBox196"]);
const TextBox196Cb = useTextBox196Cb()

  return (<>
  <Flex3 className="p-blog Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Div3 className="p-blog Div117 bpt" {...Div117Props} {...Div117Cb} {...Div117IoProps}>
<TextBox3 className="p-blog TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
</Div3>
<Flex3 className="p-blog Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<Link3 className="p-blog Link51 bpt" {...Link51Props} {...Link51Cb} {...Link51IoProps}/>
<Link3 className="p-blog Link49 bpt" {...Link49Props} {...Link49Cb} {...Link49IoProps}/>
<Link3 className="p-blog Link50 bpt" {...Link50Props} {...Link50Cb} {...Link50IoProps}/>
<Link3 className="p-blog Link52 bpt" {...Link52Props} {...Link52Cb} {...Link52IoProps}/>
<Link3 className="p-blog Link48 bpt" {...Link48Props} {...Link48Cb} {...Link48IoProps}/>
</Flex3>
</Flex3>
<Div3 className="p-blog Div126 bpt" {...Div126Props} {...Div126Cb} {...Div126IoProps}>
<Div3 className="p-blog Div137 bpt" {...Div137Props} {...Div137Cb} {...Div137IoProps}>
<Flex3 className="p-blog Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<Div3 className="p-blog Div135 bpt" {...Div135Props} {...Div135Cb} {...Div135IoProps}>
<Image3 className="p-blog Image48 bpt" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
</Div3>
<Div3 className="p-blog Div136 bpt" {...Div136Props} {...Div136Cb} {...Div136IoProps}>
<TextBox3 className="p-blog TextBox192 bpt" {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
<TextBox3 className="p-blog TextBox193 bpt" {...TextBox193Props} {...TextBox193Cb} {...TextBox193IoProps}/>
<Button2 className="p-blog Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
</Div3>
</Flex3>
<Flex3 className="p-blog Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Div3 className="p-blog Div132 bpt" {...Div132Props} {...Div132Cb} {...Div132IoProps}>
<Image3 className="p-blog Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
</Div3>
<Div3 className="p-blog Div131 bpt" {...Div131Props} {...Div131Cb} {...Div131IoProps}>
<TextBox3 className="p-blog TextBox189 bpt" {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
<TextBox3 className="p-blog TextBox188 bpt" {...TextBox188Props} {...TextBox188Cb} {...TextBox188IoProps}/>
<Button2 className="p-blog Button10 bpt" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
</Div3>
</Flex3>
<Flex3 className="p-blog Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<Div3 className="p-blog Div130 bpt" {...Div130Props} {...Div130Cb} {...Div130IoProps}>
<Image3 className="p-blog Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
</Div3>
<Div3 className="p-blog Div129 bpt" {...Div129Props} {...Div129Cb} {...Div129IoProps}>
<TextBox3 className="p-blog TextBox187 bpt" {...TextBox187Props} {...TextBox187Cb} {...TextBox187IoProps}/>
<TextBox3 className="p-blog TextBox186 bpt" {...TextBox186Props} {...TextBox186Cb} {...TextBox186IoProps}/>
<Button2 className="p-blog Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
</Div3>
</Flex3>
<Flex3 className="p-blog Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Div3 className="p-blog Div128 bpt" {...Div128Props} {...Div128Cb} {...Div128IoProps}>
<Image3 className="p-blog Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
</Div3>
<Div3 className="p-blog Div127 bpt" {...Div127Props} {...Div127Cb} {...Div127IoProps}>
<TextBox3 className="p-blog TextBox185 bpt" {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
<TextBox3 className="p-blog TextBox184 bpt" {...TextBox184Props} {...TextBox184Cb} {...TextBox184IoProps}/>
<Button2 className="p-blog Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
</Div3>
</Flex3>
<Flex3 className="p-blog Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<Div3 className="p-blog Div134 bpt" {...Div134Props} {...Div134Cb} {...Div134IoProps}>
<Image3 className="p-blog Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
</Div3>
<Div3 className="p-blog Div133 bpt" {...Div133Props} {...Div133Cb} {...Div133IoProps}>
<TextBox3 className="p-blog TextBox191 bpt" {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
<TextBox3 className="p-blog TextBox190 bpt" {...TextBox190Props} {...TextBox190Cb} {...TextBox190IoProps}/>
<Button2 className="p-blog Button13 bpt" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
</Div3>
</Flex3>
</Div3>
</Div3>
<Div3 className="p-blog Div140 bpt" {...Div140Props} {...Div140Cb} {...Div140IoProps}>
<TextBox3 className="p-blog TextBox197 bpt" {...TextBox197Props} {...TextBox197Cb} {...TextBox197IoProps}/>
<Div3 className="p-blog Div139 bpt" {...Div139Props} {...Div139Cb} {...Div139IoProps}>
<TextBox3 className="p-blog TextBox196 bpt" {...TextBox196Props} {...TextBox196Cb} {...TextBox196IoProps}/>
</Div3>
<Flex3 className="p-blog Flex78 bpt" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<Div3 className="p-blog Div138 bpt" {...Div138Props} {...Div138Cb} {...Div138IoProps}>
<TextBox3 className="p-blog TextBox194 bpt" {...TextBox194Props} {...TextBox194Cb} {...TextBox194IoProps}/>
<TextBox3 className="p-blog TextBox195 bpt" {...TextBox195Props} {...TextBox195Cb} {...TextBox195IoProps}/>
</Div3>
<Flex3 className="p-blog Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<Link3 className="p-blog Link54 bpt" {...Link54Props} {...Link54Cb} {...Link54IoProps}/>
<Link3 className="p-blog Link55 bpt" {...Link55Props} {...Link55Cb} {...Link55IoProps}/>
<Link3 className="p-blog Link56 bpt" {...Link56Props} {...Link56Cb} {...Link56IoProps}/>
</Flex3>
<Flex3 className="p-blog Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<Link3 className="p-blog Link60 bpt" {...Link60Props} {...Link60Cb} {...Link60IoProps}/>
<Link3 className="p-blog Link61 bpt" {...Link61Props} {...Link61Cb} {...Link61IoProps}/>
<Link3 className="p-blog Link62 bpt" {...Link62Props} {...Link62Cb} {...Link62IoProps}/>
</Flex3>
<Flex3 className="p-blog Flex76 bpt" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Link3 className="p-blog Link57 bpt" {...Link57Props} {...Link57Cb} {...Link57IoProps}/>
<Link3 className="p-blog Link58 bpt" {...Link58Props} {...Link58Cb} {...Link58IoProps}/>
<Link3 className="p-blog Link59 bpt" {...Link59Props} {...Link59Cb} {...Link59IoProps}/>
</Flex3>
</Flex3>
<TextBox3 className="p-blog TextBox198 bpt" {...TextBox198Props} {...TextBox198Cb} {...TextBox198IoProps}/>
</Div3>
  </>);
}
