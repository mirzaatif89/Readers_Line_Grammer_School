const { createHandler, sendJson } = require('../_lib/http');
const { readStore, upsertRecord } = require('../_lib/mobileStore');

const defaultAboutSoftware = {
    id: 'ABOUT-SOFTWARE',
    appName: 'Apexiums School System',
    schoolName: 'Apexiums School System',
    website: process.env.SCHOOL_WEBSITE || 'https://apexiumssoftware.space/#home',
    supportEmail: 'apexiumstechnologies@gmail.com',
    supportPhone: '0301-3016755',
    schoolAddress: 'Haji Bazar Chowk, Tehsil Road Jand.',
    principalName: 'Malik M. Tahir Suleman',
    description: 'Student and teacher portal APIs for Apexiums School System.',
    version: '1.0.0'
};

module.exports = createHandler({
    GET: async ({ res }) => {
        const records = readStore('about_software');
        sendJson(res, 200, {
            success: true,
            aboutSoftware: {
                ...defaultAboutSoftware,
                ...(records[0] || {}),
                appName: defaultAboutSoftware.appName,
                schoolName: defaultAboutSoftware.schoolName,
                supportEmail: defaultAboutSoftware.supportEmail,
                supportPhone: defaultAboutSoftware.supportPhone
            }
        });
    },
    POST: async ({ res, body }) => {
        const { record } = upsertRecord('about_software', {
            ...defaultAboutSoftware,
            ...(body || {}),
            id: body?.id || defaultAboutSoftware.id
        }, 'ABOUT');
        sendJson(res, 200, { success: true, aboutSoftware: record });
    }
});
