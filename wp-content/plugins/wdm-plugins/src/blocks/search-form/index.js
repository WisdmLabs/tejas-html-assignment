import { registerBlockType } from '@wordpress/blocks'
import { useBlockProps,PanelColorSettings,InspectorControls } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import icons from '../../icons'
import block from './block.json'
import './main.css'

registerBlockType(block.name,{
    icons:icons.primary,
    edit({attributes,setAttributes}){
        const { bgColor,textColor }=attributes
        const blockProps=useBlockProps({
            styles:{
                'background-color':bgColor,
                color:textColor
            }
        })
        return (
            <>
            <InspectorControls>
                <PanelColorSettings 
                title={__('Colors','wdm-plugins')}
                colorSettings={[
                    {
                        label:__('Background Color','wdm-plugins'),
                        value:bgColor,
                        onChange:newVal=>setAttributes({bgColor:newVal})
                    },
                    {
                        label:__('Text Color','wdm-plugins'),
                        value:textColor,
                        onChange:newVal=>setAttributes({textColor:newVal})
                    }
                ]}
                />
            </InspectorControls>
            <div {...blockProps}>
                <h1>Search : Your search term here</h1>
                <form>
                    <input type="text" placeholder='Search'></input>
                    <div className="btn-wrapper">
                        <button type='submit'>Search</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
})