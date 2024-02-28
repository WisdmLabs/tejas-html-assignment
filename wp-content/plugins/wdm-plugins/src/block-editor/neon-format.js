import "./neon.css";
import { registerFormatType, toggleFormat } from "@wordpress/rich-text";
import { RichTextToolbarButton } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

registerFormatType("wdm-plugins/neon", {
  title: __("Neon", "wdm-plugins"),
  tagName: "span",
  className: "neon",
  edit({ isActive, onChange, value }) {
    return (
      <RichTextToolbarButton
        title={__("Neon", "wdm-plugins")}
        icon="superhero"
        isActive={isActive}
        onClick={() => {
          onChange(
            toggleFormat(value, {
              type: "wdm-plugins/neon",
            })
          );
        }}
      />
    );
  },
});
