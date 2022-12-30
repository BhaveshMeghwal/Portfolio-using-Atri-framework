import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex4 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div4 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Link as Link4 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox as TextBox4 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button3 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex80Cb, useFlex79Cb, useDiv141Cb, useFlex81Cb, useDiv142Cb, useDiv151Cb, useDiv152Cb, useDiv143Cb, useFlex83Cb, useDiv144Cb, useDiv145Cb, useDiv146Cb, useDiv147Cb, useDiv153Cb, useDiv150Cb, useFlex87Cb, useDiv148Cb, useFlex84Cb, useFlex85Cb, useFlex86Cb, useDiv149Cb, useLink63Cb, useLink64Cb, useLink65Cb, useLink66Cb, useLink67Cb, useTextBox199Cb, useTextBox200Cb, useTextBox201Cb, useTextBox211Cb, useTextBox212Cb, useButton14Cb, useTextBox202Cb, useInput1Cb, useTextBox203Cb, useInput2Cb, useTextBox204Cb, useInput3Cb, useTextBox205Cb, useInput4Cb, useTextBox213Cb, useTextBox209Cb, useTextBox210Cb, useTextBox206Cb, useTextBox207Cb, useLink68Cb, useLink69Cb, useLink70Cb, useLink71Cb, useLink72Cb, useLink73Cb, useLink74Cb, useLink75Cb, useLink76Cb, useTextBox208Cb } from "../page-cbs/contact";
import "../page-css/contact.css";
import "../custom/contact";

export default function Contact() {
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

  const Flex80Props = useStore((state)=>state["contact"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["contact"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const Flex79Props = useStore((state)=>state["contact"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["contact"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const Div141Props = useStore((state)=>state["contact"]["Div141"]);
const Div141IoProps = useIoStore((state)=>state["contact"]["Div141"]);
const Div141Cb = useDiv141Cb()
const Flex81Props = useStore((state)=>state["contact"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["contact"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Div142Props = useStore((state)=>state["contact"]["Div142"]);
const Div142IoProps = useIoStore((state)=>state["contact"]["Div142"]);
const Div142Cb = useDiv142Cb()
const Div151Props = useStore((state)=>state["contact"]["Div151"]);
const Div151IoProps = useIoStore((state)=>state["contact"]["Div151"]);
const Div151Cb = useDiv151Cb()
const Div152Props = useStore((state)=>state["contact"]["Div152"]);
const Div152IoProps = useIoStore((state)=>state["contact"]["Div152"]);
const Div152Cb = useDiv152Cb()
const Div143Props = useStore((state)=>state["contact"]["Div143"]);
const Div143IoProps = useIoStore((state)=>state["contact"]["Div143"]);
const Div143Cb = useDiv143Cb()
const Flex83Props = useStore((state)=>state["contact"]["Flex83"]);
const Flex83IoProps = useIoStore((state)=>state["contact"]["Flex83"]);
const Flex83Cb = useFlex83Cb()
const Div144Props = useStore((state)=>state["contact"]["Div144"]);
const Div144IoProps = useIoStore((state)=>state["contact"]["Div144"]);
const Div144Cb = useDiv144Cb()
const Div145Props = useStore((state)=>state["contact"]["Div145"]);
const Div145IoProps = useIoStore((state)=>state["contact"]["Div145"]);
const Div145Cb = useDiv145Cb()
const Div146Props = useStore((state)=>state["contact"]["Div146"]);
const Div146IoProps = useIoStore((state)=>state["contact"]["Div146"]);
const Div146Cb = useDiv146Cb()
const Div147Props = useStore((state)=>state["contact"]["Div147"]);
const Div147IoProps = useIoStore((state)=>state["contact"]["Div147"]);
const Div147Cb = useDiv147Cb()
const Div153Props = useStore((state)=>state["contact"]["Div153"]);
const Div153IoProps = useIoStore((state)=>state["contact"]["Div153"]);
const Div153Cb = useDiv153Cb()
const Div150Props = useStore((state)=>state["contact"]["Div150"]);
const Div150IoProps = useIoStore((state)=>state["contact"]["Div150"]);
const Div150Cb = useDiv150Cb()
const Flex87Props = useStore((state)=>state["contact"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["contact"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Div148Props = useStore((state)=>state["contact"]["Div148"]);
const Div148IoProps = useIoStore((state)=>state["contact"]["Div148"]);
const Div148Cb = useDiv148Cb()
const Flex84Props = useStore((state)=>state["contact"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["contact"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const Flex85Props = useStore((state)=>state["contact"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["contact"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Flex86Props = useStore((state)=>state["contact"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["contact"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Div149Props = useStore((state)=>state["contact"]["Div149"]);
const Div149IoProps = useIoStore((state)=>state["contact"]["Div149"]);
const Div149Cb = useDiv149Cb()
const Link63Props = useStore((state)=>state["contact"]["Link63"]);
const Link63IoProps = useIoStore((state)=>state["contact"]["Link63"]);
const Link63Cb = useLink63Cb()
const Link64Props = useStore((state)=>state["contact"]["Link64"]);
const Link64IoProps = useIoStore((state)=>state["contact"]["Link64"]);
const Link64Cb = useLink64Cb()
const Link65Props = useStore((state)=>state["contact"]["Link65"]);
const Link65IoProps = useIoStore((state)=>state["contact"]["Link65"]);
const Link65Cb = useLink65Cb()
const Link66Props = useStore((state)=>state["contact"]["Link66"]);
const Link66IoProps = useIoStore((state)=>state["contact"]["Link66"]);
const Link66Cb = useLink66Cb()
const Link67Props = useStore((state)=>state["contact"]["Link67"]);
const Link67IoProps = useIoStore((state)=>state["contact"]["Link67"]);
const Link67Cb = useLink67Cb()
const TextBox199Props = useStore((state)=>state["contact"]["TextBox199"]);
const TextBox199IoProps = useIoStore((state)=>state["contact"]["TextBox199"]);
const TextBox199Cb = useTextBox199Cb()
const TextBox200Props = useStore((state)=>state["contact"]["TextBox200"]);
const TextBox200IoProps = useIoStore((state)=>state["contact"]["TextBox200"]);
const TextBox200Cb = useTextBox200Cb()
const TextBox201Props = useStore((state)=>state["contact"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["contact"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const TextBox211Props = useStore((state)=>state["contact"]["TextBox211"]);
const TextBox211IoProps = useIoStore((state)=>state["contact"]["TextBox211"]);
const TextBox211Cb = useTextBox211Cb()
const TextBox212Props = useStore((state)=>state["contact"]["TextBox212"]);
const TextBox212IoProps = useIoStore((state)=>state["contact"]["TextBox212"]);
const TextBox212Cb = useTextBox212Cb()
const Button14Props = useStore((state)=>state["contact"]["Button14"]);
const Button14IoProps = useIoStore((state)=>state["contact"]["Button14"]);
const Button14Cb = useButton14Cb()
const TextBox202Props = useStore((state)=>state["contact"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["contact"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const Input1Props = useStore((state)=>state["contact"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["contact"]["Input1"]);
const Input1Cb = useInput1Cb()
const TextBox203Props = useStore((state)=>state["contact"]["TextBox203"]);
const TextBox203IoProps = useIoStore((state)=>state["contact"]["TextBox203"]);
const TextBox203Cb = useTextBox203Cb()
const Input2Props = useStore((state)=>state["contact"]["Input2"]);
const Input2IoProps = useIoStore((state)=>state["contact"]["Input2"]);
const Input2Cb = useInput2Cb()
const TextBox204Props = useStore((state)=>state["contact"]["TextBox204"]);
const TextBox204IoProps = useIoStore((state)=>state["contact"]["TextBox204"]);
const TextBox204Cb = useTextBox204Cb()
const Input3Props = useStore((state)=>state["contact"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["contact"]["Input3"]);
const Input3Cb = useInput3Cb()
const TextBox205Props = useStore((state)=>state["contact"]["TextBox205"]);
const TextBox205IoProps = useIoStore((state)=>state["contact"]["TextBox205"]);
const TextBox205Cb = useTextBox205Cb()
const Input4Props = useStore((state)=>state["contact"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["contact"]["Input4"]);
const Input4Cb = useInput4Cb()
const TextBox213Props = useStore((state)=>state["contact"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["contact"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const TextBox209Props = useStore((state)=>state["contact"]["TextBox209"]);
const TextBox209IoProps = useIoStore((state)=>state["contact"]["TextBox209"]);
const TextBox209Cb = useTextBox209Cb()
const TextBox210Props = useStore((state)=>state["contact"]["TextBox210"]);
const TextBox210IoProps = useIoStore((state)=>state["contact"]["TextBox210"]);
const TextBox210Cb = useTextBox210Cb()
const TextBox206Props = useStore((state)=>state["contact"]["TextBox206"]);
const TextBox206IoProps = useIoStore((state)=>state["contact"]["TextBox206"]);
const TextBox206Cb = useTextBox206Cb()
const TextBox207Props = useStore((state)=>state["contact"]["TextBox207"]);
const TextBox207IoProps = useIoStore((state)=>state["contact"]["TextBox207"]);
const TextBox207Cb = useTextBox207Cb()
const Link68Props = useStore((state)=>state["contact"]["Link68"]);
const Link68IoProps = useIoStore((state)=>state["contact"]["Link68"]);
const Link68Cb = useLink68Cb()
const Link69Props = useStore((state)=>state["contact"]["Link69"]);
const Link69IoProps = useIoStore((state)=>state["contact"]["Link69"]);
const Link69Cb = useLink69Cb()
const Link70Props = useStore((state)=>state["contact"]["Link70"]);
const Link70IoProps = useIoStore((state)=>state["contact"]["Link70"]);
const Link70Cb = useLink70Cb()
const Link71Props = useStore((state)=>state["contact"]["Link71"]);
const Link71IoProps = useIoStore((state)=>state["contact"]["Link71"]);
const Link71Cb = useLink71Cb()
const Link72Props = useStore((state)=>state["contact"]["Link72"]);
const Link72IoProps = useIoStore((state)=>state["contact"]["Link72"]);
const Link72Cb = useLink72Cb()
const Link73Props = useStore((state)=>state["contact"]["Link73"]);
const Link73IoProps = useIoStore((state)=>state["contact"]["Link73"]);
const Link73Cb = useLink73Cb()
const Link74Props = useStore((state)=>state["contact"]["Link74"]);
const Link74IoProps = useIoStore((state)=>state["contact"]["Link74"]);
const Link74Cb = useLink74Cb()
const Link75Props = useStore((state)=>state["contact"]["Link75"]);
const Link75IoProps = useIoStore((state)=>state["contact"]["Link75"]);
const Link75Cb = useLink75Cb()
const Link76Props = useStore((state)=>state["contact"]["Link76"]);
const Link76IoProps = useIoStore((state)=>state["contact"]["Link76"]);
const Link76Cb = useLink76Cb()
const TextBox208Props = useStore((state)=>state["contact"]["TextBox208"]);
const TextBox208IoProps = useIoStore((state)=>state["contact"]["TextBox208"]);
const TextBox208Cb = useTextBox208Cb()

  return (<>
  <Flex4 className="p-contact Flex80 bpt" {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}>
<Div4 className="p-contact Div141 bpt" {...Div141Props} {...Div141Cb} {...Div141IoProps}>
<TextBox4 className="p-contact TextBox199 bpt" {...TextBox199Props} {...TextBox199Cb} {...TextBox199IoProps}/>
</Div4>
<Flex4 className="p-contact Flex79 bpt" {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<Link4 className="p-contact Link66 bpt" {...Link66Props} {...Link66Cb} {...Link66IoProps}/>
<Link4 className="p-contact Link64 bpt" {...Link64Props} {...Link64Cb} {...Link64IoProps}/>
<Link4 className="p-contact Link65 bpt" {...Link65Props} {...Link65Cb} {...Link65IoProps}/>
<Link4 className="p-contact Link67 bpt" {...Link67Props} {...Link67Cb} {...Link67IoProps}/>
<Link4 className="p-contact Link63 bpt" {...Link63Props} {...Link63Cb} {...Link63IoProps}/>
</Flex4>
</Flex4>
<Flex4 className="p-contact Flex81 bpt" {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<Div4 className="p-contact Div142 bpt" {...Div142Props} {...Div142Cb} {...Div142IoProps}>
<TextBox4 className="p-contact TextBox200 bpt" {...TextBox200Props} {...TextBox200Cb} {...TextBox200IoProps}/>
<TextBox4 className="p-contact TextBox201 bpt" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
<Div4 className="p-contact Div151 bpt" {...Div151Props} {...Div151Cb} {...Div151IoProps}>
<TextBox4 className="p-contact TextBox211 bpt" {...TextBox211Props} {...TextBox211Cb} {...TextBox211IoProps}/>
</Div4>
<Div4 className="p-contact Div152 bpt" {...Div152Props} {...Div152Cb} {...Div152IoProps}>
<TextBox4 className="p-contact TextBox212 bpt" {...TextBox212Props} {...TextBox212Cb} {...TextBox212IoProps}/>
</Div4>
</Div4>
<Div4 className="p-contact Div143 bpt" {...Div143Props} {...Div143Cb} {...Div143IoProps}>
<Flex4 className="p-contact Flex83 bpt" {...Flex83Props} {...Flex83Cb} {...Flex83IoProps}>
<Div4 className="p-contact Div144 bpt" {...Div144Props} {...Div144Cb} {...Div144IoProps}>
<TextBox4 className="p-contact TextBox202 bpt" {...TextBox202Props} {...TextBox202Cb} {...TextBox202IoProps}/>
<Input className="p-contact Input1 bpt" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
</Div4>
<Div4 className="p-contact Div145 bpt" {...Div145Props} {...Div145Cb} {...Div145IoProps}>
<TextBox4 className="p-contact TextBox203 bpt" {...TextBox203Props} {...TextBox203Cb} {...TextBox203IoProps}/>
<Input className="p-contact Input2 bpt" {...Input2Props} {...Input2Cb} {...Input2IoProps}/>
</Div4>
</Flex4>
<Div4 className="p-contact Div146 bpt" {...Div146Props} {...Div146Cb} {...Div146IoProps}>
<TextBox4 className="p-contact TextBox204 bpt" {...TextBox204Props} {...TextBox204Cb} {...TextBox204IoProps}/>
<Input className="p-contact Input3 bpt" {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
</Div4>
<Div4 className="p-contact Div147 bpt" {...Div147Props} {...Div147Cb} {...Div147IoProps}>
<TextBox4 className="p-contact TextBox205 bpt" {...TextBox205Props} {...TextBox205Cb} {...TextBox205IoProps}/>
<Input className="p-contact Input4 bpt" {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
</Div4>
<Div4 className="p-contact Div153 bpt" {...Div153Props} {...Div153Cb} {...Div153IoProps}>
<TextBox4 className="p-contact TextBox213 bpt" {...TextBox213Props} {...TextBox213Cb} {...TextBox213IoProps}/>
</Div4>
<Button3 className="p-contact Button14 bpt" {...Button14Props} {...Button14Cb} {...Button14IoProps}/>
</Div4>
</Flex4>
<Div4 className="p-contact Div150 bpt" {...Div150Props} {...Div150Cb} {...Div150IoProps}>
<TextBox4 className="p-contact TextBox209 bpt" {...TextBox209Props} {...TextBox209Cb} {...TextBox209IoProps}/>
<Div4 className="p-contact Div149 bpt" {...Div149Props} {...Div149Cb} {...Div149IoProps}>
<TextBox4 className="p-contact TextBox208 bpt" {...TextBox208Props} {...TextBox208Cb} {...TextBox208IoProps}/>
</Div4>
<Flex4 className="p-contact Flex87 bpt" {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<Div4 className="p-contact Div148 bpt" {...Div148Props} {...Div148Cb} {...Div148IoProps}>
<TextBox4 className="p-contact TextBox206 bpt" {...TextBox206Props} {...TextBox206Cb} {...TextBox206IoProps}/>
<TextBox4 className="p-contact TextBox207 bpt" {...TextBox207Props} {...TextBox207Cb} {...TextBox207IoProps}/>
</Div4>
<Flex4 className="p-contact Flex84 bpt" {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<Link4 className="p-contact Link68 bpt" {...Link68Props} {...Link68Cb} {...Link68IoProps}/>
<Link4 className="p-contact Link69 bpt" {...Link69Props} {...Link69Cb} {...Link69IoProps}/>
<Link4 className="p-contact Link70 bpt" {...Link70Props} {...Link70Cb} {...Link70IoProps}/>
</Flex4>
<Flex4 className="p-contact Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Link4 className="p-contact Link74 bpt" {...Link74Props} {...Link74Cb} {...Link74IoProps}/>
<Link4 className="p-contact Link75 bpt" {...Link75Props} {...Link75Cb} {...Link75IoProps}/>
<Link4 className="p-contact Link76 bpt" {...Link76Props} {...Link76Cb} {...Link76IoProps}/>
</Flex4>
<Flex4 className="p-contact Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<Link4 className="p-contact Link71 bpt" {...Link71Props} {...Link71Cb} {...Link71IoProps}/>
<Link4 className="p-contact Link72 bpt" {...Link72Props} {...Link72Cb} {...Link72IoProps}/>
<Link4 className="p-contact Link73 bpt" {...Link73Props} {...Link73Cb} {...Link73IoProps}/>
</Flex4>
</Flex4>
<TextBox4 className="p-contact TextBox210 bpt" {...TextBox210Props} {...TextBox210Cb} {...TextBox210IoProps}/>
</Div4>
  </>);
}
