(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['contact_button.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<span class=\"cnt-message icon\">\n    <img src=\"assets/images/message-text.svg\" class=\"normal_img\">\n    <img src=\"assets/images/message-text_dark.svg\" class=\"white_img\">\n</span>\n<span class=\"cnt-close icon\">\n    <svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M4 28L28 4\" stroke=\"var(--background)\" stroke-width=\"6.36042\" stroke-linecap=\"round\"\n            stroke-linejoin=\"round\" />\n        <path d=\"M28 28L4 4\" stroke=\"var(--background)\" stroke-width=\"6.36042\" stroke-linecap=\"round\"\n            stroke-linejoin=\"round\" />\n    </svg>\n</span>";
},"useData":true});
templates['contact_form.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"contact-popup\">\n    <div class=\"contact-header\">\n        <h4>How can we help you?</h4>\n        <p>\n            <span>Call us on:</span>\n            +41 79 409 67 89\n        </p>\n    </div>\n    <div class=\"contact-form\">\n        <form action=\"\" POST=\"method\">\n            <input type=\"text\" placeholder=\"Name\" />\n            <input type=\"email\" placeholder=\"Email Address\" />\n            <div class=\"text-massage\">\n                <textarea name=\"text\" placeholder=\"Message\"></textarea>\n                <span class=\"clip\">\n                    <img src=\"assets/images/paperclip.svg\" class=\"normal_img\">\n                    <img src=\"assets/images/paperclip_dark.svg\" class=\"white_img\">\n                </span>\n            </div>\n        </form>\n        <a class=\"send-btn\" href=\"#\">\n            Send\n            <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M14.43 5.93018L20.5 12.0002L14.43 18.0702\" stroke=\"var(--background)\" stroke-width=\"1.5\"\n                    stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                <path d=\"M3.5 12H20.33\" stroke=\"var(--background)\" stroke-width=\"1.5\" stroke-miterlimit=\"10\"\n                    stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n            </svg>\n        </a>\n    </div>\n</div>";
},"useData":true});
templates['footer.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\n    <div class=\"footer-main-item\">\n        <div class=\"footer-main-logo\">\n            <a href=\"./index.html\" class=\"footer-logo\">\n                <img src=\"assets/images/docsplan_logo.svg\" class=\"normal_img\">\n                <img src=\"assets/images/docsplan_logo_dark.svg\" class=\"white_img\">\n            </a>\n        </div>\n        <div class=\"footer-main-text\">\n            <h3 class=\"fw-bold\">\n                Nurture and grow your Technical Documentation\n            </h3>\n        </div>\n    </div>\n    <div class=\"footer-copy-right\">\n        <div class=\"footer-left\">\n            <p>Copyright © 2022 docsplant All rights Reserved</p>\n        </div>\n        <div class=\"footer-nav\">\n            <ul>\n                <li><a href=\"./tos.html\">Terms and Conditions</a></li>\n                <li><a href=\"privacy.html\">Privacy</a></li>\n            </ul>\n        </div>\n    </div>\n</div>";
},"useData":true});
templates['header.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "                        <li>\n                            <a href=\"./index.html\" class=\"dp_btn\">\n                                <span class=\"icon\">\n                                    <svg width=\"24\" height=\"22\" viewBox=\"0 0 24 22\" fill=\"none\"\n                                        xmlns=\"http://www.w3.org/2000/svg\">\n                                        <path\n                                            d=\"M11.5193 0.135062L0.442838 6.90398C0.33926 6.96708 0.249133 7.04997 0.177606 7.14791C0.10608 7.24586 0.0545574 7.35694 0.0259833 7.47481C-0.00259071 7.59268 -0.00765593 7.71502 0.0110772 7.83485C0.0298104 7.95467 0.0719746 8.06963 0.13516 8.17316C0.198255 8.27673 0.281145 8.36686 0.37909 8.43839C0.477035 8.50991 0.588117 8.56144 0.705985 8.59001C0.823853 8.61858 0.946196 8.62365 1.06602 8.60492C1.18585 8.58618 1.30081 8.54402 1.40433 8.48083L12 2.00517L22.5957 8.48083C22.6992 8.54402 22.8141 8.58618 22.934 8.60492C23.0538 8.62365 23.1761 8.61858 23.294 8.59001C23.4119 8.56144 23.523 8.50991 23.6209 8.43839C23.7189 8.36686 23.8017 8.27673 23.8648 8.17316C23.928 8.06963 23.9702 7.95467 23.9889 7.83485C24.0077 7.71502 24.0026 7.59268 23.974 7.47481C23.9454 7.35694 23.8939 7.24586 23.8224 7.14791C23.7509 7.04997 23.6607 6.96708 23.5572 6.90398L12.4807 0.135062C12.3359 0.0467307 12.1696 0 12 0C11.8304 0 11.6641 0.0467307 11.5193 0.135062V0.135062Z\"\n                                            fill=\"var(--primary_light)\" />\n                                        <path\n                                            d=\"M3.38495 11.0768C3.14014 11.0768 2.90537 11.1741 2.73226 11.3472C2.55916 11.5203 2.46191 11.7551 2.46191 11.9999V19.8769C2.46191 20.7836 3.21628 21.5379 4.1229 21.5379H19.877C20.7836 21.5379 21.538 20.7835 21.538 19.8769V11.9999C21.538 11.7551 21.4407 11.5203 21.2676 11.3472C21.0945 11.1741 20.8597 11.0768 20.6149 11.0768C20.3701 11.0768 20.1353 11.1741 19.9622 11.3472C19.7891 11.5203 19.6919 11.7551 19.6919 11.9999V19.6918H4.30798V11.9999C4.30798 11.7551 4.21074 11.5203 4.03763 11.3472C3.86453 11.1741 3.62975 11.0768 3.38495 11.0768V11.0768Z\"\n                                            fill=\"var(--primary_light)\" />\n                                    </svg>\n                                </span>\n                                Home\n                            </a>\n                        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container\">\n    <div class=\"header-item\">\n        <a href=\"./index.html\" class=\"header-logo\">\n            <img src=\"assets/images/docsplan_logo.svg\" class=\"normal_img\">\n            <img src=\"assets/images/docsplan_logo_dark.svg\" class=\"white_img\">\n        </a>\n        <div class=\"header-btn\">\n            <div class=\"menu-toggler\">\n                <div class=\"desktop-menu privacy-menu\">\n                    <ul class=\"navbar_nav\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"show_home_button") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":24},"end":{"line":28,"column":31}}})) != null ? stack1 : "")
    + "                        <li>\n                            <button class=\"theme_toggler\">\n                                <span class=\"light\">\n                                    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n                                        xmlns=\"http://www.w3.org/2000/svg\">\n                                        <path\n                                            d=\"M12 6.48387C8.95353 6.48387 6.48387 8.95353 6.48387 12C6.48387 15.0465 8.95353 17.5161 12 17.5161C15.0465 17.5161 17.5161 15.0465 17.5161 12C17.5161 8.95353 15.0465 6.48387 12 6.48387Z\"\n                                            fill=\"var(--secondary)\" />\n                                        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                                            d=\"M12 3C12.481 3 12.871 3.38995 12.871 3.87097V3.93775C12.871 4.41877 12.481 4.80872 12 4.80872C11.519 4.80872 11.129 4.41877 11.129 3.93775V3.87097C11.129 3.38995 11.519 3 12 3ZM5.57766 5.57768C5.91779 5.23755 6.46926 5.23755 6.80939 5.57768L6.91499 5.68328C7.25512 6.02341 7.25512 6.57488 6.91499 6.91501C6.57485 7.25515 6.02339 7.25515 5.68325 6.91501L5.57766 6.80942C5.23752 6.46928 5.23752 5.91781 5.57766 5.57768ZM18.4224 5.57768C18.7625 5.91782 18.7625 6.46928 18.4224 6.80942L18.3168 6.91501C17.9766 7.25515 17.4252 7.25515 17.085 6.91501C16.7449 6.57488 16.7449 6.02341 17.085 5.68328L17.1906 5.57768C17.5308 5.23755 18.0822 5.23755 18.4224 5.57768ZM3 12C3 11.519 3.38995 11.129 3.87097 11.129H3.93775C4.41877 11.129 4.80872 11.519 4.80872 12C4.80872 12.481 4.41877 12.871 3.93775 12.871H3.87097C3.38995 12.871 3 12.481 3 12ZM19.1913 12C19.1913 11.519 19.5813 11.129 20.0623 11.129H20.129C20.6101 11.129 21 11.519 21 12C21 12.481 20.6101 12.871 20.129 12.871H20.0623C19.5813 12.871 19.1913 12.481 19.1913 12ZM17.085 17.0851C17.4251 16.7449 17.9765 16.7449 18.3167 17.085L18.4223 17.1905C18.7624 17.5306 18.7625 18.0821 18.4224 18.4223C18.0823 18.7624 17.5308 18.7625 17.1906 18.4224L17.0851 18.3168C16.7449 17.9767 16.7449 17.4253 17.085 17.0851ZM6.91492 17.085C7.2551 17.4251 7.25516 17.9765 6.91506 18.3167L6.80949 18.4223C6.4694 18.7625 5.91793 18.7625 5.57776 18.4225C5.23759 18.0824 5.23752 17.5309 5.57762 17.1907L5.68319 17.0851C6.02328 16.7449 6.57475 16.7449 6.91492 17.085ZM12 19.1913C12.481 19.1913 12.871 19.5813 12.871 20.0623V20.129C12.871 20.6101 12.481 21 12 21C11.519 21 11.129 20.6101 11.129 20.129V20.0623C11.129 19.5813 11.519 19.1913 12 19.1913Z\"\n                                            fill=\"var(--secondary)\" />\n                                    </svg>\n                                </span>\n                                <span class=\"dark\">\n                                    <svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\"\n                                        xmlns=\"http://www.w3.org/2000/svg\">\n                                        <path\n                                            d=\"M15.8417 0.266356C15.7159 -0.088785 15.2137 -0.0887853 15.0878 0.266355L14.6565 1.48356C14.6162 1.59724 14.5268 1.68667 14.4131 1.72695L13.1959 2.15825C12.8408 2.28409 12.8408 2.78633 13.1959 2.91217L14.4131 3.34347C14.5268 3.38375 14.6162 3.47318 14.6565 3.58686L15.0878 4.80406C15.2137 5.1592 15.7159 5.1592 15.8417 4.80406L16.273 3.58686C16.3133 3.47318 16.4028 3.38375 16.5164 3.34347L17.7336 2.91217C18.0888 2.78633 18.0888 2.28409 17.7336 2.15825L16.5164 1.72695C16.4028 1.68667 16.3133 1.59724 16.273 1.48356L15.8417 0.266356Z\"\n                                            fill=\"#fff\" />\n                                        <path\n                                            d=\"M11.148 4.24033C11.235 3.995 11.5819 3.995 11.6689 4.24033L11.9066 4.9112C11.9344 4.98973 11.9962 5.05151 12.0747 5.07934L12.7456 5.31705C12.9909 5.40398 12.9909 5.75094 12.7456 5.83787L12.0747 6.07558C11.9962 6.1034 11.9344 6.16518 11.9066 6.24371L11.6689 6.91458C11.5819 7.15991 11.235 7.15991 11.148 6.91458L10.9103 6.24371C10.8825 6.16518 10.8207 6.1034 10.7422 6.07558L10.0713 5.83787C9.82599 5.75094 9.82599 5.40398 10.0713 5.31705L10.7422 5.07934C10.8207 5.05151 10.8825 4.98973 10.9103 4.9112L11.148 4.24033Z\"\n                                            fill=\"#fff\" />\n                                        <path\n                                            d=\"M13.7701 7.22125C13.828 7.05769 14.0593 7.05769 14.1173 7.22125L14.2757 7.66849C14.2943 7.72085 14.3355 7.76203 14.3878 7.78058L14.8351 7.93906C14.9986 7.99701 14.9986 8.22832 14.8351 8.28627L14.3878 8.44474C14.3355 8.46329 14.2943 8.50448 14.2757 8.55684L14.1173 9.00408C14.0593 9.16764 13.828 9.16764 13.7701 9.00408L13.6116 8.55684C13.593 8.50448 13.5518 8.46329 13.4995 8.44474L13.0522 8.28627C12.8887 8.22832 12.8887 7.99701 13.0522 7.93906L13.4995 7.78058C13.5518 7.76203 13.593 7.72085 13.6116 7.66849L13.7701 7.22125Z\"\n                                            fill=\"#fff\" />\n                                        <path\n                                            d=\"M8.13468 1.65082C8.28945 1.92163 8.26318 2.25949 8.0684 2.50312C7.25111 3.52542 6.76722 4.80518 6.76722 6.19444C6.76722 9.5078 9.53765 12.2308 13.0014 12.2308C13.9528 12.2308 14.852 12.0249 15.656 11.6579C15.9386 11.529 16.2712 11.5848 16.4962 11.7989C16.7212 12.013 16.7933 12.3425 16.6785 12.6311C15.4249 15.7812 12.2868 18 8.6297 18C3.88437 18 0 14.2564 0 9.5929C0 5.35107 3.21566 1.86876 7.3667 1.27529C7.67548 1.23114 7.97992 1.38 8.13468 1.65082Z\"\n                                            fill=\"#fff\" />\n                                    </svg>\n                                </span>\n                            </button>\n                        </li>\n                        <li class=\"dropdown\">\n                            <a id=\"langFlagOutfit\" class=\"dropdown-toggle\" href=\"#\" role=\"button\"\n                                data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                                <span class=\"flag flex-shrink-0\">\n                                    <img src=\"./assets/images/flag_en.png\" alt=\"lang flag\" width=\"32\" height=\"32\"\n                                        class=\"img-fluid\" />\n                                </span>\n                                <span class=\"lang_text\">EN</span>\n                            </a>\n                            <ul class=\"dropdown-menu\">\n                                <li>\n                                    <a class=\"dropdown-item lang_flag\" data-lang=\"en\" href=\"#\">EN</a>\n                                </li>\n                                <li>\n                                    <a class=\"dropdown-item lang_flag\" data-lang=\"de\" href=\"./index_de.html\">DE</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li>\n                            <a href=\"https://blog.docsplant.com\" class=\"dp_btn\">\n                                <span class=\"icon\">\n                                    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n                                        xmlns=\"http://www.w3.org/2000/svg\">\n                                        <path d=\"M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8\n                            2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19\n                            19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46\n                            22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z\"\n                                            stroke=\"var(--primary_light) stroke-width=\" 1.5\" stroke-miterlimit=\"10\"\n                                            stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                                        <path d=\"M7 8H17\" stroke=\"var(--primary_light) stroke-width=\" 1.5\"\n                                            stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                                        <path d=\"M7 13H13\" stroke=\"var(--primary_light)\n                            stroke-width=\" 1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                                    </svg>\n                                </span>\n                                Blog\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"mobile-menu\">\n                <div id=\"nav-icon4\" class=\"menu_icon\">\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
})();