/**
 * Copyright (c) 2008-2011 The Open Planning Project
 * 
 * Published under the GPL license.
 * See https://github.com/opengeo/gxp/raw/master/license.txt for the full text
 * of the license.
 */

/** api: (define)
 *  module = gxp
 *  class = PoweredBy
 *  base_link = `Ext.Component <http://dev.sencha.com/deploy/dev/docs/?class=Ext.Component>`_
 */
Ext.namespace("gxp");

/** api: constructor
 *  .. class:: PoweredBy(config)
 *   
 *      Component that adds a powered-by icon to its parent container. By
 *      default, this adds a "Powered by OpenGeo" icon to the bottom left and
 *      shifts attribution above itself.
 *
 *      To add this powered-by icon to the map of your :class:`gxp.Viewer`,
 *      just add it to the map's items. Your map configuration could then look
 *      like this:
 *
 *      .. code-block:: javascript
 *
 *         map: {
 *             projection: "EPSG:4326",
 *             center: [0,0],
 *             zoom: 1,
 *             items: [{
 *                 xtype: "gx_poweredby"
 *             }]
 *         }
 *
 *      To modify the icon or its position: All the magic is done through css.
 *      This component's div has the "gxp-poweredby" class, and adds the
 *      "gxp-poweredby-ct" class to its container.
 */
gxp.PoweredBy = Ext.extend(Ext.Component, {
    
    cls: "gxp-poweredby",

    onAdded: function() {
        gxp.PoweredBy.superclass.onAdded.apply(this, arguments);
        this.ownerCt.addClass("gxp-poweredby-ct");
    },
    
    onRemoved: function() {
        this.ownerCt.removeClass("gxp-poweredby-ct");
        gxp.PoweredBy.superclass.onAdded.apply(this, arguments);
    }
});

/** api: xtype = gxp_poweredby */
Ext.reg('gxp_poweredby', gxp.PoweredBy);
