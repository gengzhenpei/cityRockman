/**
        if (typeof (console) != 'undefined' && typeof (console.log) == 'function') {
            Array.prototype.unshift.call(arguments, '[Ajax Upload]');
        }
    }
        if (el.addEventListener) {
            el.addEventListener(type, fn, false);
        } else if (el.attachEvent) {
            el.attachEvent('on' + type, function () {
                fn.call(el);
            });
        } else {
            throw new Error('not supported or DOM not loaded');
        }
    }
        var timeout;
            if (timeout) {
                clearTimeout(timeout);
            }
        });
    }
            var box = el.getBoundingClientRect();
                var bound = body.getBoundingClientRect();
            }
                clientTop = 0;
            }
                top: top,
            };
        };
    } else {
            var top = 0,
                top += el.offsetTop || 0;
            } while (el);
                left: left,
            };
        };
    }
        var left, right, top, bottom;
            left: left,
        };
    }
        for (var name in styles) {
            if (styles.hasOwnProperty(name)) {
                el.style[name] = styles[name];
            }
        }
    }
        var box = getBox(from);
        
            position: 'absolute',
        });
    }
        var div = document.createElement('div');
            div.innerHTML = html;
        };
    })();
        var id = 0;
            return 'ValumsAjaxUpload' + id++;
        };
    })();
        return file.replace(/.*(\/|\\)/, "");
    }
        return (-1 !== file.indexOf('.')) ? file.replace(/.*[.]/, '') : '';
    }
        var re = new RegExp('\\b' + name + '\\b');
    }
        if (!hasClass(el, name)) {
            el.className += ' ' + name;
        }
    }
        var re = new RegExp('\\b' + name + '\\b');
    }
        el.parentNode.removeChild(el);
    }
        this._settings = {
        };
            if (options.hasOwnProperty(i)) {
                this._settings[i] = options[i];
            }
        }
        } else if (typeof button == "string") {
            if (/^#.*/.test(button)) {
            }
        }
            throw new Error("Please make sure that you're passing a valid element");
        }
                if (e && e.preventDefault) {
                    e.preventDefault();
                } else if (window.event) {
                    window.event.returnValue = false;
                }
            });
        }
    };
        setData: function (data) {
            this._settings.data = data;
        },
            addClass(this._button, this._settings.disabledClass);
                this._button.setAttribute('disabled', 'disabled');
            }
            }
        },
            removeClass(this._button, this._settings.disabledClass);

            var self = this;
                'position': 'absolute',
            });
                'display': 'block',
            });
                if (typeof (div.filters) == 'undefined') {
                    throw new Error('Opacity not supported by the browser');
                }
            }

                    return;
                }
                    self._clearInput();
                }
                    self.submit();
                }
            });
                addClass(self._button, self._settings.hoverClass);
            });
                removeClass(self._button, self._settings.hoverClass);

        },
            if (!this._input) {
                return;
            }
        },
            var self = this;
                if (self._disabled) {
                    return;
                }
                    self._createInput();
                }

        },
            var settings = this._settings;
                if (settings.data.hasOwnProperty(prop)) {
                    var el = document.createElement("input");
                }
            }
        },

                            removeNode(iframe);
                        },
                    }
                }
                }
                }
                } else if (doc.body) {
                            response = doc.body.firstChild.firstChild.nodeValue;
                        }
                            //alert("1"+response);
                            response = eval("(" + response + ")");
                            //response = JSON.parse(response);
                            //response = response;
                        } else {
                            response = {};
                        }
                    }
                } else {
                }
            });
        },
            var self = this,
                return;
            }
                this._clearInput();
            }
        }
    };
})();