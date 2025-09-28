/**
 * Plugin factory
 *
 * @param {string} pkgName - NPM package name
 * @returns {class}
 */
async function factory (pkgName) {
  const me = this

  /**
   * WaibuBootstrapIcons class
   *
   * @class
   */
  class WaibuBootstrapIcons extends this.app.pluginClass.base {
    static alias = 'wbsi'
    static dependencies = ['waibu-mpa']

    constructor () {
      super(pkgName, me.app)
      this.config = {
        waibu: {
          prefix: 'bootstrap-icons'
        }
      }
    }
  }

  return WaibuBootstrapIcons
}

export default factory
