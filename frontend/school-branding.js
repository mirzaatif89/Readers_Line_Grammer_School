// Preserve sessions and school records while migrating only the school identity.
(() => {
  const name = 'Apexiums School System';
  const address = 'Haji Bazar Chowk, Tehsil Road Jand.';
  window.SCHOOL_BRANDING = Object.freeze({name, address, phone:'0301-3016755', logo:'images/logo.png'});
  try {
    const settings = JSON.parse(localStorage.getItem('eduCore_settings') || '{}') || {};
    if (settings.apexiumsBrandingVersion !== 2) {
      Object.assign(settings, {schoolName:name, schoolTitle:name, address, schoolAddress:address, phone:'0301-3016755', logoDataUrl:'', apexiumsBrandingVersion:2});
      localStorage.setItem('eduCore_settings', JSON.stringify(settings));
    }
  } catch (_) { /* The static branding also works when storage is disabled. */ }
})();

