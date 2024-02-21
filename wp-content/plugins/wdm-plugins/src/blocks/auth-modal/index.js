import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import icons from "../../icons.js";
import "./main.css";
import block from "./block.json";
registerBlockType(block.name, {
  icon: {
    src: icons.primary,
  },
  edit({ attributes, setAttributes }) {
    const { showRegister } = attributes;
    const blockProps = useBlockProps();

    return (
      <>
        <InspectorControls>
          <PanelBody title={__("General", "wdm-plugins")}>
            <ToggleControl
              label={__("Show Register", "wdm-plugins")}
              help={
                showRegister
                  ? __("Showing Register Form", "wdm-plugins")
                  : __("Hiding Register Form", "wdm-plugins")
              }
              checked={showRegister}
              onChange={(newVal) => setAttributes({ showRegister: newVal })}
            />
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          {__(
            "This block is not previewable from the editor. View your site for a live demo.",
            "wdm-plugins"
          )}
        </div>
      </>
    );
  },
});
