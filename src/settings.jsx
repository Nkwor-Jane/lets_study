import {createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
const appId = "ead3000a62d4466999cf959df3621cbd"
const token = 
// "007eJxTYPBt3FZ+7pBKyL8JwVO2lvLd2vj2+L9Z/W+jmd/s2OB7L3KfAkNqYoqxgYFBoplRiomJmZmlpWVymqWpZUqasZmRYXJSStI5tZSGQEYG2ylVDIxQCOKzMrhlFhWXMDAAAG3MIro="

"007eJxTYDi2Q/mTrkVw8Pf9QRnfBXtuXuwWklg0i18i9/iHP+r3xJoVGFITU4wNDAwSzYxSTEzMzCwtLZPTLE0tU9KMzYwMk5NSOI21UhoCGRlMvn9jYIRCEJ+FITcxM4+BAQBipx9n"

export const config = {mode: "rtc", codec: "vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "first"