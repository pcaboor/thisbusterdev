import { cn } from "@/lib/utils"

interface CalloutProps {
  icon?: string
  children?: React.ReactNode
  type?: "default" | "warning" | "danger"
  customTextColor?: string
  customBgColor?: string
  customBorderColor?: string
  borderWidth?: string
  fontSize?: string
  fontWeight?: string
}

export function Callout({
  children,
  icon,
  type = "default",
  customTextColor,
  customBgColor,
  customBorderColor,
  borderWidth = "4px",
  fontSize,
  fontWeight,
  ...props
}: CalloutProps) {
  let borderColorClass = "";
  switch (type) {
    case "danger":
      borderColorClass = "border-red-900";
      break;
    case "warning":
      borderColorClass = "border-yellow-900";
      break;
    default:
      borderColorClass = customBorderColor ? "" : "border-gray-400";
      break;
  }


  const defaultIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sm" >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  );

  return (
    <div
      className={cn(
        "my-6 flex items-start rounded-md border p-4",
        borderColorClass,
        { "bg-red-50": type === "danger" && !customBgColor },
        { "bg-yellow-50": type === "warning" && !customBgColor },
        customBgColor
      )}
      style={{
        fontSize,
        fontWeight,
        borderColor: customBorderColor,
        borderWidth,
        borderStyle: "solid"
      }}
      {...props}
    >
      {icon ? icon : (
        <span className={`mr-4 text-2xl ${customTextColor}`} style={{ fontSize, fontWeight }}>
          {/* {defaultIcon} */}
        </span>
      )}
      <div className={customTextColor} style={{ fontSize, fontWeight }}>{children}</div>
    </div>
  );
}