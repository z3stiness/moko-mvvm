Pod::Spec.new do |s|
  s.name             = 'mokoMvvmFlowSwiftUIMacOs'
  s.version          = '0.16.1'
  s.summary          = 'MOKO MVVM SwiftUI additions for Flow'
  s.description      = 'some description here'
  s.homepage         = 'localhost'
  s.license          = { :type => 'Apache 2' }
  s.authors          = 'IceRock Development'
  s.source           = {
    :http => "https://repo1.maven.org/maven2/dev/icerock/moko/mvvm-flow-swiftui/#{s.version}/mvvm-flow-swiftui-#{s.version}.zip",
    :type => "zip"
  }

  s.platform = :osx
  s.osx.deployment_target = '14.0'
  s.osx.vendored_framework = 'mokoMvvmFlowSwiftUI.xcframework'

  s.requires_arc = true
end