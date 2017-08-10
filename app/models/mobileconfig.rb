require 'securerandom'

class Mobileconfig
  def initialize(ssid, password)
    @ssid = ssid
    @password = password
  end
  
  def to_plist_node
    {
    'PayloadDisplayName' => ['Join', @ssid].join(' '),
    'PayloadOrganization'=> 'Wifriend.io',
    'PayloadIdentifier' => 'io.wifriend.mobileconfig',
    'PayloadUUID' => SecureRandom.uuid,
    'PayloadVersion' => 1,
    'PayloadRemovalDisallowed' => false,
    'PayloadType' => 'Configuration',
    'PayloadContent' => [
        {
          'EncryptionType' => 'Any',
          'AutoJoin' => true,
          'SSID_STR' => @ssid,
          'Password' => @password,
          'PayloadDisplayName' => 'Wi-Fi',
          'ProxyType' => 'None',
          'HIDDEN_NETWORK' => false,
          'PayloadIdentifier' => 'io.wifriend.mobileconfig',
          'PayloadType' => 'com.apple.wifi.managed',
          'PayloadUUID' => SecureRandom.uuid,
          'PayloadVersion' => 1
        }
      ],
    }.to_plist
  end
end