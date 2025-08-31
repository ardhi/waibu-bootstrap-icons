async function factory (pkgName) {
  const me = this

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
