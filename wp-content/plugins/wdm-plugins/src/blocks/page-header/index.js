import { registerBlockType } from "@wordpress/blocks";
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import block from "./block.json";
import icons from "../../icons.js";
import { __ } from "@wordpress/i18n";
import "./main.css";

registerBlockType(block.name, {
  icon: icons.primary,
  edit(attributes, setAttributes) {
    const blockProps = useBlockProps();
    const { content, showCategory } = attributes;
    return (
      <>
        <InspectorControls>
          <PanelBody title={__("General", "wdm-plugins")}>
            <ToggleControl
              label={__("Show Category", "wdm-plugins")}
              checked={showCategory}
              onChange={(showCategory) => setAttributes({ showCategory })}
            />
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          <div className="inner-page-header">
            <RichText
              tagName="h1"
              placeholder={__("Heading", "wdm-plugins")}
              value={content}
              onChange={(content) => setAttributes({ content })}
            />
          </div>
        </div>
      </>
    );
  },
});
