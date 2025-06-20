async function factory (pkgName) {
  const me = this

  return class WaibuBootstrapIcons extends this.lib.BajoPlugin {
    constructor () {
      super(pkgName, me.app)
      this.alias = 'wbsi'
      this.dependencies = ['waibu-mpa']
      this.config = {
        waibu: {
          prefix: 'bootstrap-icons'
        }
      }
    }
  }
}

export default factory
